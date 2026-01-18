// Quiz Data with graphs and complete options
const quizData = {
    web: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            correct: 0,
            difficulty: "easy",
            explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: [
                "text-color",
                "font-color",
                "color",
                "text-style"
            ],
            correct: 2,
            difficulty: "easy",
            explanation: "The 'color' property in CSS is used to set the color of text."
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<hyperlink>"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "The <a> tag defines a hyperlink, which is used to link from one page to another."
        },
        {
            question: "Which of the following is NOT a valid CSS position property value?",
            options: [
                "static",
                "relative",
                "center",
                "fixed",
                "absolute"
            ],
            correct: 2,
            difficulty: "medium",
            explanation: "The 'center' is not a valid value for the position property. Valid values are: static, relative, absolute, fixed, sticky."
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            correct: 2,
            difficulty: "easy",
            explanation: "CSS stands for Cascading Style Sheets, which is used to style HTML elements."
        },
        {
            question: "Which JavaScript method is used to select an HTML element by its ID?",
            options: [
                "document.querySelector()",
                "document.getElementById()",
                "document.getElementByClass()",
                "document.findElement()",
                "document.selectId()"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "The getElementById() method returns the element that has the ID attribute with the specified value."
        },
        {
            question: "Which HTML5 tag is used for drawing graphics via scripting?",
            options: [
                "<svg>",
                "<canvas>",
                "<draw>",
                "<graphic>",
                "<paint>"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "The <canvas> tag is used to draw graphics, on the fly, via scripting (usually JavaScript)."
        },
        {
            question: "Which of the following is NOT a semantic HTML element?",
            options: [
                "<header>",
                "<article>",
                "<div>",
                "<footer>",
                "<section>"
            ],
            correct: 2,
            difficulty: "medium",
            explanation: "<div> is a generic container element and not considered semantic. Semantic elements clearly describe their meaning to both browser and developer."
        },
        {
            question: "What is the correct way to include an external JavaScript file?",
            options: [
                "<script href='script.js'>",
                "<script src='script.js'>",
                "<javascript src='script.js'>",
                "<link rel='script' href='script.js'>",
                "<js src='script.js'>"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "The <script> tag with the 'src' attribute is used to include an external JavaScript file."
        },
        {
            question: "Which property is used to change the font of an element in CSS?",
            options: [
                "font-family",
                "font-style",
                "text-font",
                "font-type",
                "text-family"
            ],
            correct: 0,
            difficulty: "easy",
            explanation: "The 'font-family' property specifies the font for an element."
        }
    ],
    
    js: [
        {
            question: "Which operator is used for strict equality comparison in JavaScript?",
            options: [
                "==",
                "===",
                "=",
                "!==",
                "~="
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "The === operator checks for both value and type equality, while == only checks for value equality with type coercion."
        },
        {
            question: "What will typeof null return in JavaScript?",
            options: [
                "null",
                "object",
                "undefined",
                "string",
                "number"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "typeof null returns 'object'. This is a known bug in JavaScript that can't be fixed due to backward compatibility."
        },
        {
            question: "Which method removes the last element from an array and returns that element?",
            options: [
                "pop()",
                "push()",
                "shift()",
                "slice()",
                "splice()"
            ],
            correct: 0,
            difficulty: "easy",
            explanation: "The pop() method removes the last element from an array and returns that element."
        },
        {
            question: "What does the 'this' keyword refer to in JavaScript?",
            options: [
                "The function itself",
                "The global object",
                "The object that the function is a property of",
                "It depends on the context",
                "The parent object"
            ],
            correct: 3,
            difficulty: "medium",
            explanation: "The value of 'this' depends on how a function is called (runtime binding)."
        },
        {
            question: "Which of these is NOT a JavaScript data type?",
            options: [
                "boolean",
                "number",
                "character",
                "symbol",
                "bigint"
            ],
            correct: 2,
            difficulty: "easy",
            explanation: "JavaScript does not have a separate 'character' data type. Strings can contain one or more characters."
        },
        {
            question: "What is the purpose of the 'use strict' directive?",
            options: [
                "To enforce stricter parsing and error handling",
                "To make JavaScript run faster",
                "To enable ES6 features",
                "To disable all warnings",
                "To allow unsafe operations"
            ],
            correct: 0,
            difficulty: "medium",
            explanation: "'use strict' enforces stricter parsing and error handling, helping to write more secure and optimized JavaScript."
        },
        {
            question: "What does the Array.map() method do?",
            options: [
                "Modifies the original array",
                "Creates a new array with results of calling a function on every element",
                "Filters array elements based on a condition",
                "Reduces the array to a single value",
                "Sorts the array elements"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "map() creates a new array with the results of calling a provided function on every element in the array."
        },
        {
            question: "Which keyword is used to declare a constant in JavaScript?",
            options: [
                "let",
                "var",
                "const",
                "constant",
                "final"
            ],
            correct: 2,
            difficulty: "easy",
            explanation: "The 'const' keyword is used to declare a constant (a variable that cannot be reassigned)."
        }
    ],
    
    general: [
        {
            question: "Based on the performance graph below, which algorithm has O(n²) time complexity?",
            options: [
                "Binary Search",
                "Merge Sort",
                "Bubble Sort",
                "Quick Sort (average case)",
                "Hash Table Lookup"
            ],
            correct: 2,
            difficulty: "medium",
            hasGraph: true,
            graphType: "timeComplexity",
            explanation: "Bubble Sort has O(n²) time complexity, which is represented by the red quadratic curve in the graph."
        },
        {
            question: "Which data structure uses LIFO (Last In First Out) principle?",
            options: [
                "Queue",
                "Stack",
                "Array",
                "Linked List",
                "Tree"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "Stack uses LIFO principle where the last element added is the first one to be removed."
        },
        {
            question: "Based on the memory usage graph, which data structure typically uses the most memory for the same dataset?",
            options: [
                "Array",
                "Linked List",
                "Hash Table",
                "Binary Tree",
                "Graph (adjacency matrix)"
            ],
            correct: 4,
            difficulty: "hard",
            hasGraph: true,
            graphType: "memoryUsage",
            explanation: "Graph using adjacency matrix typically uses O(V²) memory, where V is the number of vertices, making it the most memory-intensive for large datasets."
        },
        {
            question: "What does API stand for?",
            options: [
                "Application Programming Interface",
                "Advanced Programming Interface",
                "Application Process Integration",
                "Automated Programming Interface",
                "Application Protocol Interface"
            ],
            correct: 0,
            difficulty: "easy",
            explanation: "API stands for Application Programming Interface, which is a set of rules that allows programs to talk to each other."
        },
        {
            question: "Which of the following is NOT a programming paradigm?",
            options: [
                "Object-Oriented",
                "Functional",
                "Procedural",
                "Sequential",
                "Declarative"
            ],
            correct: 3,
            difficulty: "medium",
            explanation: "Sequential is not a programming paradigm. The main paradigms are Imperative, Declarative, Object-Oriented, Functional, Procedural, etc."
        },
        {
            question: "Based on the search performance graph, which algorithm shows logarithmic time complexity?",
            options: [
                "Linear Search",
                "Binary Search",
                "Jump Search",
                "Exponential Search",
                "Interpolation Search"
            ],
            correct: 1,
            difficulty: "medium",
            hasGraph: true,
            graphType: "searchPerformance",
            explanation: "Binary Search has O(log n) time complexity, represented by the logarithmic curve in the graph."
        },
        {
            question: "What does SQL stand for?",
            options: [
                "Structured Question Language",
                "Structured Query Language",
                "Simple Query Language",
                "Sequential Query Language",
                "Standard Query Language"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "SQL stands for Structured Query Language, used for managing and manipulating databases."
        },
        {
            question: "Which algorithm is used for finding the shortest path in a graph?",
            options: [
                "Dijkstra's Algorithm",
                "Bubble Sort",
                "Binary Search",
                "Quick Sort",
                "Merge Sort"
            ],
            correct: 0,
            difficulty: "hard",
            explanation: "Dijkstra's algorithm finds the shortest path between nodes in a graph."
        },
        {
            question: "Based on the sorting performance graph, which sorting algorithm has the best average-case time complexity?",
            options: [
                "Bubble Sort",
                "Insertion Sort",
                "Selection Sort",
                "Merge Sort",
                "Quick Sort"
            ],
            correct: 4,
            difficulty: "hard",
            hasGraph: true,
            graphType: "sortingPerformance",
            explanation: "Quick Sort has the best average-case time complexity of O(n log n) among comparison-based sorting algorithms."
        },
        {
            question: "What is the main purpose of a version control system like Git?",
            options: [
                "To compile code",
                "To track changes in source code during development",
                "To deploy applications",
                "To write documentation",
                "To debug programs"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "Version control systems like Git track changes to source code, allowing multiple developers to work together."
        },
        {
            question: "What is the time complexity of accessing an element in an array by index?",
            options: [
                "O(n)",
                "O(log n)",
                "O(1)",
                "O(n²)",
                "O(2^n)"
            ],
            correct: 2,
            difficulty: "easy",
            explanation: "Accessing an array element by index has O(1) time complexity because it uses direct memory addressing."
        },
        {
            question: "Based on the data structure operations graph, which operation is fastest for a hash table?",
            options: [
                "Insertion",
                "Deletion",
                "Search",
                "All are O(1) average case",
                "All are O(log n)"
            ],
            correct: 3,
            difficulty: "medium",
            hasGraph: true,
            graphType: "hashTablePerformance",
            explanation: "Hash tables provide O(1) average time complexity for insertion, deletion, and search operations."
        }
    ]
};

// Application State
const state = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswers: [],
    timer: null,
    timeRemaining: 60,
    totalTime: 0,
    selectedTopic: null,
    chart: null,
    quizTitles: {
        web: "Web Development Quiz",
        js: "JavaScript Quiz",
        general: "Programming Concepts Quiz"
    },
    quizDescriptions: {
        web: "Test your knowledge on HTML, CSS and JavaScript",
        js: "Challenge your understanding of JavaScript fundamentals",
        general: "Explore programming concepts with interactive graphs"
    }
};

// DOM Elements
const elements = {
    quizSelection: document.getElementById('quizSelection'),
    quizContainer: document.getElementById('quizContainer'),
    resultsContainer: document.getElementById('resultsContainer'),
    currentQuestion: document.getElementById('currentQuestion'),
    totalQuestions: document.getElementById('totalQuestions'),
    score: document.getElementById('score'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progressBar'),
    question: document.getElementById('question'),
    difficulty: document.getElementById('difficulty'),
    category: document.getElementById('category'),
    optionsContainer: document.getElementById('optionsContainer'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn'),
    feedback: document.getElementById('feedback'),
    finalScore: document.getElementById('finalScore'),
    correctAnswers: document.getElementById('correctAnswers'),
    totalQuestionsResult: document.getElementById('totalQuestionsResult'),
    timeTaken: document.getElementById('timeTaken'),
    accuracy: document.getElementById('accuracy'),
    resultsMessage: document.getElementById('resultsMessage'),
    startQuizBtn: document.getElementById('startQuizBtn'),
    retryBtn: document.getElementById('retryBtn'),
    newQuizBtn: document.getElementById('newQuizBtn'),
    shareBtn: document.getElementById('shareBtn'),
    confirmationModal: document.getElementById('confirmationModal'),
    cancelSubmit: document.getElementById('cancelSubmit'),
    confirmSubmit: document.getElementById('confirmSubmit'),
    remainingQuestions: document.getElementById('remainingQuestions'),
    graphContainer: document.getElementById('graphContainer'),
    quizGraph: document.getElementById('quizGraph'),
    exitQuizBtn: document.getElementById('exitQuizBtn'),
    exitConfirmationModal: document.getElementById('exitConfirmationModal'),
    cancelExit: document.getElementById('cancelExit'),
    confirmExit: document.getElementById('confirmExit'),
    changeTopicBtn: document.getElementById('changeTopicBtn'),
    changeTopicModal: document.getElementById('changeTopicModal'),
    cancelChange: document.getElementById('cancelChange'),
    confirmChange: document.getElementById('confirmChange'),
    quizTitle: document.getElementById('quizTitle'),
    quizDescription: document.getElementById('quizDescription'),
    completedQuizTitle: document.getElementById('completedQuizTitle'),
    viewAllTopicsBtn: document.getElementById('viewAllTopicsBtn')
};

// Graph Data and Configurations
const graphConfigs = {
    timeComplexity: {
        type: 'line',
        data: {
            labels: ['10', '100', '1000', '10000', '100000'],
            datasets: [
                {
                    label: 'O(1) - Constant',
                    data: [1, 1, 1, 1, 1],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderWidth: 3,
                    fill: true
                },
                {
                    label: 'O(log n) - Logarithmic',
                    data: [1, 2, 3, 4, 5],
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    borderWidth: 3,
                    fill: true
                },
                {
                    label: 'O(n) - Linear',
                    data: [10, 100, 1000, 10000, 100000],
                    borderColor: '#FF9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.1)',
                    borderWidth: 3,
                    fill: true
                },
                {
                    label: 'O(n²) - Quadratic',
                    data: [100, 10000, 1000000, 100000000, 10000000000],
                    borderColor: '#f44336',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    borderWidth: 3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Input Size (n)',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Operations (log scale)',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Time Complexity Comparison',
                    color: '#333',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    labels: {
                        color: '#333'
                    }
                }
            }
        }
    },
    
    memoryUsage: {
        type: 'bar',
        data: {
            labels: ['Array', 'Linked List', 'Hash Table', 'Binary Tree', 'Graph Matrix'],
            datasets: [{
                label: 'Memory Usage (relative)',
                data: [10, 20, 15, 12, 100],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(33, 150, 243, 0.7)',
                    'rgba(255, 152, 0, 0.7)',
                    'rgba(156, 39, 176, 0.7)',
                    'rgba(244, 67, 54, 0.7)'
                ],
                borderColor: [
                    '#4CAF50',
                    '#2196F3',
                    '#FF9800',
                    '#9C27B0',
                    '#f44336'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Relative Memory Usage',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Data Structure Memory Usage Comparison',
                    color: '#333',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    },
    
    searchPerformance: {
        type: 'line',
        data: {
            labels: ['10', '100', '1000', '10000', '100000'],
            datasets: [
                {
                    label: 'Linear Search - O(n)',
                    data: [10, 100, 1000, 10000, 100000],
                    borderColor: '#f44336',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    borderWidth: 3,
                    fill: true
                },
                {
                    label: 'Binary Search - O(log n)',
                    data: [3.32, 6.64, 9.97, 13.29, 16.61],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderWidth: 3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Array Size (n)',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Comparisons Needed',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Search Algorithm Performance',
                    color: '#333',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    labels: {
                        color: '#333'
                    }
                }
            }
        }
    },
    
    sortingPerformance: {
        type: 'bar',
        data: {
            labels: ['Bubble', 'Insertion', 'Selection', 'Merge', 'Quick'],
            datasets: [
                {
                    label: 'Worst Case',
                    data: [100, 100, 100, 69, 100],
                    backgroundColor: 'rgba(244, 67, 54, 0.7)',
                    borderColor: '#f44336',
                    borderWidth: 2
                },
                {
                    label: 'Average Case',
                    data: [100, 50, 100, 69, 39],
                    backgroundColor: 'rgba(255, 152, 0, 0.7)',
                    borderColor: '#FF9800',
                    borderWidth: 2
                },
                {
                    label: 'Best Case',
                    data: [100, 10, 100, 69, 39],
                    backgroundColor: 'rgba(76, 175, 80, 0.7)',
                    borderColor: '#4CAF50',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Relative Time (lower is better)',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Sorting Algorithm Performance Comparison',
                    color: '#333',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    labels: {
                        color: '#333'
                    }
                }
            }
        }
    },
    
    hashTablePerformance: {
        type: 'line',
        data: {
            labels: ['100', '1000', '10000', '100000', '1000000'],
            datasets: [
                {
                    label: 'Hash Table Operations',
                    data: [1.2, 1.5, 1.8, 2.1, 2.5],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    pointRadius: 6,
                    pointBackgroundColor: '#4CAF50'
                },
                {
                    label: 'Binary Search Tree',
                    data: [6.64, 9.97, 13.29, 16.61, 19.93],
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    borderWidth: 3,
                    fill: true
                },
                {
                    label: 'Linked List',
                    data: [50, 500, 5000, 50000, 500000],
                    borderColor: '#f44336',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    borderWidth: 3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Number of Elements',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Time (log scale)',
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Data Structure Operation Performance',
                    color: '#333',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    labels: {
                        color: '#333'
                    }
                }
            }
        }
    }
};

// Initialize the application
function init() {
    // Set up theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            document.body.className = theme + '-theme';
            // Update graph colors if chart exists
            if (state.chart) {
                updateGraphColors();
            }
        });
    });

    // Set up topic selection
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            document.querySelectorAll('.topic-card').forEach(c => {
                c.classList.remove('active');
            });
            
            // Add active class to selected card
            card.classList.add('active');
            state.selectedTopic = card.getAttribute('data-topic');
        });
    });

    // Start quiz button
    elements.startQuizBtn.addEventListener('click', startQuiz);

    // View all topics button
    elements.viewAllTopicsBtn.addEventListener('click', () => {
        // Ensure all topic cards are visible
        document.querySelectorAll('.topic-card').forEach(card => {
            card.style.display = 'block';
        });
    });

    // Quiz navigation buttons
    elements.prevBtn.addEventListener('click', showPreviousQuestion);
    elements.nextBtn.addEventListener('click', showNextQuestion);
    elements.submitBtn.addEventListener('click', showConfirmationModal);

    // Exit quiz button
    elements.exitQuizBtn.addEventListener('click', showExitConfirmation);
    elements.cancelExit.addEventListener('click', hideExitConfirmation);
    elements.confirmExit.addEventListener('click', exitToTopicSelection);

    // Change topic button
    elements.changeTopicBtn.addEventListener('click', showChangeTopicConfirmation);
    elements.cancelChange.addEventListener('click', hideChangeTopicConfirmation);
    elements.confirmChange.addEventListener('click', changeTopic);

    // Results buttons
    elements.retryBtn.addEventListener('click', retryQuiz);
    elements.newQuizBtn.addEventListener('click', showQuizSelection);
    elements.shareBtn.addEventListener('click', shareResults);

    // Submit modal buttons
    elements.cancelSubmit.addEventListener('click', hideConfirmationModal);
    elements.confirmSubmit.addEventListener('click', submitQuiz);

    // Select first topic by default
    document.querySelector('.topic-card').classList.add('active');
    state.selectedTopic = document.querySelector('.topic-card').getAttribute('data-topic');
}

// Start the quiz
function startQuiz() {
    if (!state.selectedTopic) {
        alert('Please select a quiz topic!');
        return;
    }

    // Reset state
    state.currentQuiz = quizData[state.selectedTopic];
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.selectedAnswers = new Array(state.currentQuiz.length).fill(null);
    state.totalTime = 0;
    
    // Set timer based on quiz length
    state.timeRemaining = state.currentQuiz.length * 15; // 15 seconds per question
    elements.timer.textContent = state.timeRemaining;
    elements.timer.style.color = document.body.classList.contains('dark-theme') ? '#e0e0e0' : '#333';
    
    // Update UI
    elements.quizSelection.classList.add('hidden');
    elements.quizContainer.classList.remove('hidden');
    elements.resultsContainer.classList.add('hidden');
    
    // Update quiz info
    elements.totalQuestions.textContent = state.currentQuiz.length;
    elements.category.textContent = getCategoryName(state.selectedTopic);
    elements.quizTitle.textContent = state.quizTitles[state.selectedTopic];
    elements.quizDescription.textContent = state.quizDescriptions[state.selectedTopic];
    
    // Start timer
    startTimer();
    
    // Load first question
    loadQuestion();
}

// Load a question
function loadQuestion() {
    const question = state.currentQuiz[state.currentQuestionIndex];
    
    // Update question info
    elements.currentQuestion.textContent = state.currentQuestionIndex + 1;
    elements.question.textContent = question.question;
    elements.difficulty.textContent = question.difficulty ? question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1) : "Medium";
    
    // Update progress bar
    const progress = ((state.currentQuestionIndex + 1) / state.currentQuiz.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
    
    // Update buttons
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    elements.nextBtn.classList.toggle('hidden', state.currentQuestionIndex === state.currentQuiz.length - 1);
    elements.submitBtn.classList.toggle('hidden', state.currentQuestionIndex !== state.currentQuiz.length - 1);
    
    // Clear options container
    elements.optionsContainer.innerHTML = '';
    
    // Add options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // Check if this option was previously selected
        if (state.selectedAnswers[state.currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        // Create option content
        optionElement.innerHTML = `
            <div class="option-label">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
            <div class="option-icon">
                <i class="fas fa-check"></i>
            </div>
        `;
        
        // Add click event
        optionElement.addEventListener('click', () => selectOption(index));
        
        elements.optionsContainer.appendChild(optionElement);
    });
    
    // Handle graph if question has one
    if (question.hasGraph && question.graphType) {
        elements.graphContainer.classList.remove('hidden');
        renderGraph(question.graphType);
    } else {
        elements.graphContainer.classList.add('hidden');
        if (state.chart) {
            state.chart.destroy();
            state.chart = null;
        }
    }
    
    // Clear feedback
    elements.feedback.classList.add('hidden');
    elements.feedback.innerHTML = '';
}

// Show exit confirmation modal
function showExitConfirmation() {
    elements.exitConfirmationModal.classList.remove('hidden');
}

// Hide exit confirmation modal
function hideExitConfirmation() {
    elements.exitConfirmationModal.classList.add('hidden');
}

// Exit to topic selection
function exitToTopicSelection() {
    // Clear timer
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
    
    // Destroy chart if exists
    if (state.chart) {
        state.chart.destroy();
        state.chart = null;
    }
    
    // Reset state
    state.currentQuiz = null;
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.selectedAnswers = [];
    
    // Hide modal and quiz, show topic selection
    hideExitConfirmation();
    elements.quizContainer.classList.add('hidden');
    elements.quizSelection.classList.remove('hidden');
}

// Show change topic confirmation modal
function showChangeTopicConfirmation() {
    elements.changeTopicModal.classList.remove('hidden');
}

// Hide change topic confirmation modal
function hideChangeTopicConfirmation() {
    elements.changeTopicModal.classList.add('hidden');
}

// Change topic (exit current quiz and go to topic selection)
function changeTopic() {
    exitToTopicSelection();
    hideChangeTopicConfirmation();
}

// Render graph for question
function renderGraph(graphType) {
    // Destroy existing chart
    if (state.chart) {
        state.chart.destroy();
    }
    
    const config = graphConfigs[graphType];
    if (!config) return;
    
    // Update colors for current theme
    updateGraphConfigColors(config);
    
    // Create new chart
    const ctx = elements.quizGraph.getContext('2d');
    state.chart = new Chart(ctx, config);
}

// Update graph colors based on theme
function updateGraphConfigColors(config) {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const textColor = isDarkTheme ? '#e0e0e0' : '#333';
    const gridColor = isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    
    // Update title color
    if (config.options.plugins.title) {
        config.options.plugins.title.color = textColor;
    }
    
    // Update axis titles
    if (config.options.scales) {
        if (config.options.scales.x && config.options.scales.x.title) {
            config.options.scales.x.title.color = textColor;
        }
        if (config.options.scales.y && config.options.scales.y.title) {
            config.options.scales.y.title.color = textColor;
        }
        
        // Update grid colors
        if (config.options.scales.x) {
            config.options.scales.x.grid.color = gridColor;
        }
        if (config.options.scales.y) {
            config.options.scales.y.grid.color = gridColor;
        }
    }
    
    // Update legend colors
    if (config.options.plugins.legend && config.options.plugins.legend.labels) {
        config.options.plugins.legend.labels.color = textColor;
    }
}

function updateGraphColors() {
    if (state.chart && state.currentQuiz) {
        const question = state.currentQuiz[state.currentQuestionIndex];
        if (question.hasGraph && question.graphType) {
            renderGraph(question.graphType);
        }
    }
}

// Select an option
function selectOption(optionIndex) {
    // Deselect all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select clicked option
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    
    // Store selected answer
    state.selectedAnswers[state.currentQuestionIndex] = optionIndex;
    
    // If we're showing feedback, check the answer
    if (elements.feedback.classList.contains('correct') || elements.feedback.classList.contains('incorrect')) {
        checkAnswer();
    }
}

// Check the current answer and show feedback
function checkAnswer() {
    const question = state.currentQuiz[state.currentQuestionIndex];
    const selectedOption = state.selectedAnswers[state.currentQuestionIndex];
    
    // Clear previous feedback
    elements.feedback.classList.remove('correct', 'incorrect');
    elements.feedback.innerHTML = '';
    
    // If no answer selected, return
    if (selectedOption === null) return;
    
    // Mark correct/incorrect options
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedOption && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    // Show feedback
    elements.feedback.classList.remove('hidden');
    
    if (selectedOption === question.correct) {
        elements.feedback.classList.add('correct');
        elements.feedback.innerHTML = `
            <h4><i class="fas fa-check-circle"></i> Correct!</h4>
            <p>${question.explanation || "Well done!"}</p>
        `;
    } else {
        elements.feedback.classList.add('incorrect');
        elements.feedback.innerHTML = `
            <h4><i class="fas fa-times-circle"></i> Incorrect</h4>
            <p>The correct answer is: <strong>${question.options[question.correct]}</strong></p>
            <p>${question.explanation || "Better luck next time!"}</p>
        `;
    }
}

// Show next question
function showNextQuestion() {
    // Check answer if one is selected
    if (state.selectedAnswers[state.currentQuestionIndex] !== null) {
        checkAnswer();
        
        // Wait a moment before moving to next question
        setTimeout(() => {
            moveToNextQuestion();
        }, 1500);
    } else {
        moveToNextQuestion();
    }
}

function moveToNextQuestion() {
    if (state.currentQuestionIndex < state.currentQuiz.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion();
    }
}

// Show previous question
function showPreviousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        loadQuestion();
    }
}

// Start the timer
function startTimer() {
    // Clear any existing timer
    if (state.timer) {
        clearInterval(state.timer);
    }
    
    // Update timer every second
    state.timer = setInterval(() => {
        state.timeRemaining--;
        state.totalTime++;
        elements.timer.textContent = state.timeRemaining;
        
        // Change color when time is running low
        if (state.timeRemaining <= 10) {
            elements.timer.style.color = '#f44336';
        }
        
        // End quiz if time runs out
        if (state.timeRemaining <= 0) {
            clearInterval(state.timer);
            submitQuiz();
        }
    }, 1000);
}

// Show confirmation modal
function showConfirmationModal() {
    // Calculate unanswered questions
    const unanswered = state.selectedAnswers.filter(answer => answer === null).length;
    elements.remainingQuestions.textContent = unanswered;
    
    // Show modal
    elements.confirmationModal.classList.remove('hidden');
}

// Hide confirmation modal
function hideConfirmationModal() {
    elements.confirmationModal.classList.add('hidden');
}

// Submit the quiz
function submitQuiz() {
    // Hide modal
    hideConfirmationModal();
    
    // Stop timer
    clearInterval(state.timer);
    
    // Destroy any existing chart
    if (state.chart) {
        state.chart.destroy();
        state.chart = null;
    }
    
    // Calculate score
    state.score = 0;
    state.currentQuiz.forEach((question, index) => {
        if (state.selectedAnswers[index] === question.correct) {
            state.score++;
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((state.score / state.currentQuiz.length) * 100);
    
    // Update results
    elements.finalScore.textContent = percentage;
    elements.correctAnswers.textContent = state.score;
    elements.totalQuestionsResult.textContent = state.currentQuiz.length;
    elements.timeTaken.textContent = state.totalTime;
    elements.accuracy.textContent = percentage;
    elements.completedQuizTitle.textContent = getCategoryName(state.selectedTopic);
    
    // Set result message based on score
    let message = '';
    if (percentage >= 90) {
        message = `<h3>Excellent! <i class="fas fa-star"></i></h3>
                  <p>You're a coding genius! You scored ${percentage}% - that's outstanding! Keep up the fantastic work!</p>`;
    } else if (percentage >= 70) {
        message = `<h3>Great Job! <i class="fas fa-thumbs-up"></i></h3>
                  <p>Well done! You scored ${percentage}% - you clearly understand the material. With a bit more practice, you'll be acing every quiz!</p>`;
    } else if (percentage >= 50) {
        message = `<h3>Good Effort! <i class="fas fa-check"></i></h3>
                  <p>You scored ${percentage}% - a solid effort! Review the questions you missed and try again to improve your score.</p>`;
    } else {
        message = `<h3>Keep Practicing! <i class="fas fa-book"></i></h3>
                  <p>You scored ${percentage}% - don't be discouraged! Every expert was once a beginner. Review the material and try again!</p>`;
    }
    
    elements.resultsMessage.innerHTML = message;
    
    // Animate score circle
    const circle = document.querySelector('.score-progress');
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    
    // Set initial state
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;
    
    // Animate to final score
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);
    
    // Show results, hide quiz
    elements.quizContainer.classList.add('hidden');
    elements.resultsContainer.classList.remove('hidden');
}

// Retry the same quiz
function retryQuiz() {
    startQuiz();
}

// Show quiz selection screen
function showQuizSelection() {
    elements.quizSelection.classList.remove('hidden');
    elements.resultsContainer.classList.add('hidden');
    elements.quizContainer.classList.add('hidden');
}

// Share results
function shareResults() {
    const percentage = Math.round((state.score / state.currentQuiz.length) * 100);
    const text = `I scored ${percentage}% on the ${getCategoryName(state.selectedTopic)} quiz!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quiz Results',
            text: text,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('Results copied to clipboard!');
        });
    }
}

// Get category name from topic key
function getCategoryName(topic) {
    const names = {
        web: 'Web Development',
        js: 'JavaScript',
        general: 'Programming Concepts'
    };
    return names[topic] || 'General Knowledge';
}

// Initialize the app when DOM is loaded

document.addEventListener('DOMContentLoaded', init);


