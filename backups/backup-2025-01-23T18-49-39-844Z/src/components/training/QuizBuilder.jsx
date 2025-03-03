import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlusIcon, 
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/outline';

export default function QuizBuilder() {
  const [quiz, setQuiz] = useState({
    title: '',
    description: '',
    timeLimit: 30,
    passingScore: 70,
    questions: []
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    type: 'multiple',
    question: '',
    options: ['', ''],
    correctAnswer: 0,
    points: 1
  });

  const addQuestion = () => {
    if (!currentQuestion.question || currentQuestion.options.some(opt => !opt)) {
      return;
    }

    setQuiz(prev => ({
      ...prev,
      questions: [...prev.questions, { ...currentQuestion, id: Date.now() }]
    }));

    setCurrentQuestion({
      type: 'multiple',
      question: '',
      options: ['', ''],
      correctAnswer: 0,
      points: 1
    });
  };

  const removeQuestion = (index) => {
    setQuiz(prev => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== index)
    }));
  };

  const moveQuestion = (index, direction) => {
    const newQuestions = [...quiz.questions];
    const temp = newQuestions[index];
    newQuestions[index] = newQuestions[index + direction];
    newQuestions[index + direction] = temp;
    setQuiz(prev => ({ ...prev, questions: newQuestions }));
  };

  const handleSave = () => {
    if (!quiz.title || quiz.questions.length === 0) {
      return;
    }

    // Sauvegarder le quiz
    console.log('Quiz sauvegardé:', quiz);
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Créer un nouveau quiz
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Titre du quiz
            </label>
            <input
              type="text"
              value={quiz.title}
              onChange={(e) => setQuiz(prev => ({ ...prev, title: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={quiz.description}
              onChange={(e) => setQuiz(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Temps limite (minutes)
              </label>
              <input
                type="number"
                value={quiz.timeLimit}
                onChange={(e) => setQuiz(prev => ({ ...prev, timeLimit: parseInt(e.target.value) }))}
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Score minimum (%)
              </label>
              <input
                type="number"
                value={quiz.passingScore}
                onChange={(e) => setQuiz(prev => ({ ...prev, passingScore: parseInt(e.target.value) }))}
                min="0"
                max="100"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ajout de question */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          Ajouter une question
        </h4>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Question
            </label>
            <input
              type="text"
              value={currentQuestion.question}
              onChange={(e) => setCurrentQuestion(prev => ({
                ...prev,
                question: e.target.value
              }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Options
            </label>
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...currentQuestion.options];
                      newOptions[index] = e.target.value;
                      setCurrentQuestion(prev => ({
                        ...prev,
                        options: newOptions
                      }));
                    }}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder={`Option ${index + 1}`}
                  />
                  <button
                    onClick={() => {
                      const newOptions = currentQuestion.options.filter((_, i) => i !== index);
                      setCurrentQuestion(prev => ({
                        ...prev,
                        options: newOptions,
                        correctAnswer: prev.correctAnswer >= index ? prev.correctAnswer - 1 : prev.correctAnswer
                      }));
                    }}
                    className="p-2 text-red-600 hover:text-red-700 rounded-full hover:bg-red-100"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            {currentQuestion.options.length < 5 && (
              <button
                onClick={() => setCurrentQuestion(prev => ({
                  ...prev,
                  options: [...prev.options, '']
                }))}
                className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Ajouter une option
              </button>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Réponse correcte
            </label>
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={currentQuestion.correctAnswer === index}
                    onChange={() => setCurrentQuestion(prev => ({
                      ...prev,
                      correctAnswer: index
                    }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700">{option || `Option ${index + 1}`}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Points
            </label>
            <input
              type="number"
              value={currentQuestion.points}
              onChange={(e) => setCurrentQuestion(prev => ({
                ...prev,
                points: parseInt(e.target.value)
              }))}
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={addQuestion}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Ajouter la question
            </button>
          </div>
        </div>
      </div>

      {/* Liste des questions */}
      {quiz.questions.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            Questions ({quiz.questions.length})
          </h4>

          <div className="space-y-4">
            {quiz.questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {index + 1}. {question.question}
                    </p>
                    <div className="mt-2 space-y-1">
                      {question.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className="flex items-center space-x-2"
                        >
                          {optIndex === question.correctAnswer ? (
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircleIcon className="h-5 w-5 text-gray-400" />
                          )}
                          <span className="text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {index > 0 && (
                      <button
                        onClick={() => moveQuestion(index, -1)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <ArrowsUpDownIcon className="h-5 w-5" />
                      </button>
                    )}
                    {index < quiz.questions.length - 1 && (
                      <button
                        onClick={() => moveQuestion(index, 1)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <ArrowsUpDownIcon className="h-5 w-5" />
                      </button>
                    )}
                    <button
                      onClick={() => removeQuestion(index)}
                      className="p-1 text-red-600 hover:text-red-700"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => {
            setQuiz({
              title: '',
              description: '',
              timeLimit: 30,
              passingScore: 70,
              questions: []
            });
            setCurrentQuestion({
              type: 'multiple',
              question: '',
              options: ['', ''],
              correctAnswer: 0,
              points: 1
            });
          }}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Réinitialiser
        </button>
        <button
          onClick={handleSave}
          disabled={!quiz.title || quiz.questions.length === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Enregistrer le quiz
        </button>
      </div>
    </div>
  );
}