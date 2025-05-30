# Set working directory
setwd("/Users/allana/OneDrive/Documents/HighDimensionalDataAnalysis/project")

# Load libraries
library(tidyverse)
library(ggplot2)
library(reshape2)
library(caret)
library(MASS)
library(Metrics)
library(gridExtra)
library(tibble)

# Load data
df = read.csv("Student_Mental_Stress_and_Coping_Mechanisms.csv")

# View structure and summary
str(df)
summary(df)
colSums(is.na(df))  # Check missing

# Set student ID as rownames and remove
rownames(df) = df$Student.ID
df$Student.ID = NULL

# Group genders
df$Gender = as.character(df$Gender)
df$Gender[!(df$Gender %in% c("Male", "Female"))] = "Other"
df$Gender = as.factor(df$Gender)

# Convert binary columns to factors
df$Counseling.Attendance = as.factor(df$Counseling.Attendance)
df$Family.Mental.Health.History = as.factor(df$Family.Mental.Health.History)
df$Medical.Condition = as.factor(df$Medical.Condition)

# Drop coping mechanisms completely to match groupmate's code
df = df %>% dplyr::select(-Stress.Coping.Mechanisms)

# Explore mental stress visually
hist(df$Mental.Stress.Level, breaks = 10, main = "Distribution of Mental Stress Level", xlab = "Stress Level")
boxplot(Mental.Stress.Level ~ Gender, data = df, main = "Stress Level by Gender", ylab = "Stress Level")

# Numeric variables scatterplots
numeric_vars = df %>% dplyr::select(where(is.numeric)) %>% dplyr::select(-Mental.Stress.Level) %>% names()
for (var in numeric_vars) {
  p = ggplot(df, aes_string(x = var, y = "Mental.Stress.Level")) +
    geom_point(alpha = 0.5) +
    geom_smooth(method = "lm", se = FALSE, color = "blue") +
    labs(title = paste("Mental Stress vs", var)) +
    theme_minimal()
  print(p)
}

# Run ANOVA for categorical predictors
cat_vars = c("Gender", "Counseling.Attendance", "Family.Mental.Health.History", "Medical.Condition")
for (var in cat_vars) {
  cat("\nAnova for Mental Stress Level by", var, "\n")
  formula = as.formula(paste("Mental.Stress.Level ~", var))
  print(summary(aov(formula, data = df)))
}

# Correlation matrix
numeric_df = df %>% dplyr::select(where(is.numeric))
cor_matrix = cor(numeric_df, use = "complete.obs")
mental_stress_corr = cor_matrix["Mental.Stress.Level", ]
mental_stress_corr = mental_stress_corr[names(mental_stress_corr) != "Mental.Stress.Level"]
mental_stress_sorted = sort(mental_stress_corr, decreasing = TRUE)
print(mental_stress_sorted)

cat("\nTop 5 Positively Correlated Variables:\n")
print(head(mental_stress_sorted, 5))

cat("\nTop 5 Negatively Correlated Variables:\n")
print(tail(mental_stress_sorted, 5))

# Group stress into Low, Medium, High
df$Stress.Group = cut(df$Mental.Stress.Level,
                      breaks = c(0, 3, 7, 10),
                      labels = c("Low", "Medium", "High"),
                      right = TRUE)
df$Stress.Group = as.factor(df$Stress.Group)

# Remove raw Mental Stress Level to avoid leakage
df$Mental.Stress.Level = NULL

# Modeling
predictors = setdiff(names(df), "Stress.Group")
df_selected = df[, c(predictors, "Stress.Group")]

set.seed(123)
train_index = createDataPartition(df_selected$Stress.Group, p = 0.8, list = FALSE)
train = df_selected[train_index, ]
test = df_selected[-train_index, ]

# Train models
set.seed(123)
lda_model = train(Stress.Group ~ ., data = train, method = "lda", trControl = trainControl(method = "cv", number = 10))
lda_pred = predict(lda_model, newdata = test)

# QDA model (will try to run, may still fail due to collinearity)
set.seed(123)
tryCatch({
  qda_model = train(Stress.Group ~ ., data = train, method = "qda", trControl = trainControl(method = "cv", number = 10))
  qda_pred = predict(qda_model, newdata = test)
}, error = function(e) {
  print("QDA failed due to multicollinearity.")
})

# Logistic Regression
set.seed(123)
log_model = train(Stress.Group ~ ., data = train, method = "multinom", trControl = trainControl(method = "cv", number = 10), trace = FALSE)
log_pred = predict(log_model, newdata = test)

# Confusion Matrices
cat("\nLDA Confusion Matrix:\n")
print(confusionMatrix(lda_pred, test$Stress.Group))

if (exists("qda_pred")) {
  cat("\nQDA Confusion Matrix:\n")
  print(confusionMatrix(qda_pred, test$Stress.Group))
}

cat("\nLogistic Regression Confusion Matrix:\n")
print(confusionMatrix(log_pred, test$Stress.Group))

# Create model performance table
model_perf <- tibble(
  Model = c("LDA", "QDA", "Logistic Regression"),
  Accuracy = c(
    mean(lda_model$resample$Accuracy) * 100,
    if (exists("qda_model")) mean(qda_model$resample$Accuracy) * 100 else NA,
    mean(log_model$resample$Accuracy) * 100
  )
)

# Plot model performance
ggplot(model_perf, aes(x=Model, y=Accuracy, fill=Model)) +
  geom_bar(stat="identity") +
  ylim(0, 100) +
  ylab("Accuracy (%)") +
  ggtitle("Classification Accuracy by Model") +
  theme_minimal()

# Top 5 positive and negative correlated variables
top_pos <- head(mental_stress_sorted, 5)
top_neg <- tail(mental_stress_sorted, 5)

top_predictors <- tibble(
  Predictor = c(names(top_pos), names(top_neg)),
  Correlation = c(top_pos, top_neg),
  Direction = rep(c("Positive", "Negative"), each = 5)
)

ggplot(top_predictors, aes(x=reorder(Predictor, Correlation), y=Correlation, fill=Direction)) +
  geom_bar(stat="identity") +
  coord_flip() +
  labs(title="Top Predictors Correlated with Stress Level", y="Correlation Coefficient", x="Predictor") +
  scale_fill_manual(values = c("Positive" = "forestgreen", "Negative" = "firebrick")) +
  theme_minimal()



