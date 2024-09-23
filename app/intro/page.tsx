/* eslint-disable react/no-unescaped-entities */
import { Flex, Heading, Text, VStack, Box, ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar2 from '@/components/navbar2';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function IntroPage() {
  return (
    <ChakraProvider>
      <Navbar2 />
      <Flex bg="gray.700" >
        {/* Sidebar */}
        <Box as="nav" width="230px" bg="gray.700" p={4} position="fixed" h="100%" top={16}>
          <VStack align="start" spacing={4} color='gray.200'>
            <a href="#section1">Introduction</a>
            <a href="#section9">Setup</a> {/* Link to the new Setup section */}
            <a href="#section2">Basic Syntax & Variables</a>
            <a href="#section3">Control Flow</a>
            <a href="#section4">Loops</a>
            <a href="#section5">Functions</a>
            <a href="#section6">Arrays & Lists</a>
            <a href="#section7">Simple Project</a>
            <a href="#section8">Next Steps</a>
            <Box mt="auto" textAlign="center"> {/* Pushes the Home link to the bottom */}
            <Text fontSize="lg" fontWeight="bold" color="gray.100">
                <a href="/homepage">Home</a>
            </Text>
            </Box>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box ml="250px" p={8} bg="gray.700"> {/* Match the background color of the sidebar */}
          <Section  id="section1" title="Introduction to Programming">
            <Box p={4} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text>Welcome to the basics of programming. In this section, you will learn what programming is and why it is important.</Text>
            </Box>
          </Section>

          {/* Setup Section */}
          <Section id="section9" title="Setup">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text>To start coding and running your code online, you can use Replit. Here’s how to set it up:</Text>
              <ol>
                <li><Text as="span" fontWeight="bold">Sign Up or Log In:</Text> Visit <a href="https://replit.com/" target="_blank" rel="noopener noreferrer">Replit Website</a>. Sign up for a new account or log in if you already have one.</li>
                <li><Text as="span" fontWeight="bold">Create a New Repl:</Text> Click the Create button, choose your programming language (e.g., Python, JavaScript), name your project, and click Create Repl.</li>
                <li><Text as="span" fontWeight="bold">Write Your Code:</Text> Use the editor to write or paste your code.</li>
                <li><Text as="span" fontWeight="bold">Run Your Code:</Text> Click the Run button to execute your code. The output will appear in the console on the right.</li>
                <li><Text as="span" fontWeight="bold">Save Your Work:</Text> Your work is automatically saved as you type.</li>
                <li><Text as="span" fontWeight="bold">Share Your Repl:</Text> Use the Share button to get a link to your project or invite others to collaborate.</li>
              </ol>
            </Box>
          </Section>

          <Section id="section2" title="Basic Syntax & Variables">
                <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                    <Text fontSize="lg" fontWeight="bold" mb={4}>
                    What Are Variables?
                    </Text>
                    <Text mb={4}>
                    Variables are containers for storing data values. In programming, variables are used to hold information 
                    that can be referenced and manipulated throughout your code. Understanding how to use variables is fundamental
                     to writing effective code.
                    </Text>

                    <Text fontSize="lg" fontWeight="bold" mb={4}>
                    Data Types
                    </Text>
                    <Text mb={4}>
                    Different types of data can be stored in variables. Here are some common data types:
                    </Text>
                    <ul>
                    <li><Text as="span" fontWeight="bold">String:</Text> Represents text. Example: <code>"Hello, World!"</code></li>
                    <li><Text as="span" fontWeight="bold">Number:</Text> Represents numeric values. Example: <code>25</code></li>
                    <li><Text as="span" fontWeight="bold">Boolean:</Text> Represents true or false values. Example: <code>true</code></li>
                    </ul>

                    <Text fontSize="lg" fontWeight="bold" mb={4}>
                    Declaring Variables
                    </Text>
                    <Text mb={4}>
                    In JavaScript, you can declare variables using different keywords:
                    </Text>
                    <ul>
                    <li><Text as="span" fontWeight="bold">let:</Text> Allows you to declare variables that can be 
                    reassigned later. Example: <code>let age = 25;</code></li>
                    <li><Text as="span" fontWeight="bold">const:</Text> Declares variables that cannot be reassigned. 
                    Example: <code>const pi = 3.14;</code></li>
                    </ul>

                    <Text fontSize="lg" fontWeight="bold" mb={4}>
                    Examples
                    </Text>
                    <Text mb={4}>
                    Here are some examples of how to use variables:
                    </Text>
                    <ul>
                    <li><Text as="span" fontWeight="bold">String Variable:</Text> <code>let message = "Hello, World!";</code></li>
                    <li><Text as="span" fontWeight="bold">Number Variable:</Text> <code>let age = 25;</code></li>
                    <li><Text as="span" fontWeight="bold">Boolean Variable:</Text> <code>let isStudent = true;</code></li>
                    </ul>

                    <Text fontSize="lg" fontWeight="bold" mb={4}>
                    Interactive Example
                    </Text>
                    <Text mb={4}>
                    Below is an interactive example where you can see how changing variable values affects the output.
                    </Text>
                    {/* Interactive Box Placeholder */}
                    <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                    <Text mb={2}><code>let name = "Alice";</code></Text>
                    <Text mb={2}><code>let greeting = "Hello, " + name + "!";</code></Text>
                    <Text><code>console.log(greeting);</code> will output <Text as="span" fontWeight="bold">"Hello, Alice!"</Text></Text>
                    </Box>
                </Box>
                </Section>


        <Section id="section3" title="Control Flow">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Understanding Control Flow
                </Text>
                <Text mb={4}>
                Control flow is a fundamental concept in programming that determines the order in which statements are executed based on conditions. In most programming languages, including JavaScript, control flow is managed using conditionals.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Conditional Statements
                </Text>
                <Text mb={4}>
                Conditional statements allow you to execute different blocks of code based on certain conditions. The most common conditional statements are <code>if</code> and <code>else</code>. Here's a brief overview:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">If Statement:</Text> Executes a block of code if its condition evaluates to <code>true</code>.</li>
                <li><Text as="span" fontWeight="bold">Else Statement:</Text> Executes a block of code if the condition in the <code>if</code> statement is <code>false</code>.</li>
                <li><Text as="span" fontWeight="bold">Else If Statement:</Text> Allows you to check multiple conditions.</li>
                </ul>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example
                </Text>
                <Text mb={4}>
                Here’s a basic example of how you might use an <code>if</code> statement in JavaScript to check if someone is an adult:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let age = 20;`}</code></Text>
                <Text mb={2}><code>{`if (age >= 18) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log('You are an adult.');`}</code></Text>
                <Text mb={2}><code>{`}`}</code></Text>
                <Text mb={2}><code>{`else {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log('You are not an adult.');`}</code></Text>
                <Text><code>{`}`}</code></Text>
                </Box>
                <Text mb={4}>
                In this example, the condition <code>age &gt;= 18</code> is checked. If the condition is <code>true</code>, the message <code>'You are an adult.'</code> will be logged to the console. If the condition is <code>false</code>, the message <code>'You are not an adult.'</code> will be logged instead.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Nested Conditionals
                </Text>
                <Text mb={4}>
                You can also nest conditionals to handle more complex scenarios. For example, you might want to check if someone is a minor or an adult and then check their age group:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let age = 25;`}</code></Text>
                <Text mb={2}><code>{`if (age < 18) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log('You are a minor.');`}</code></Text>
                <Text mb={2}><code>{`}`}</code></Text>
                <Text mb={2}><code>{`else if (age >= 18 && age < 65) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log('You are an adult.');`}</code></Text>
                <Text mb={2}><code>{`}`}</code></Text>
                <Text mb={2}><code>{`else {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log('You are a senior.');`}</code></Text>
                <Text><code>{`}`}</code></Text>
                </Box>
                <Text mb={4}>
                In this example, the code checks if the person is a minor, an adult, or a senior based on their age and logs the appropriate message.
                </Text>
            </Box>
            </Section>


        <Section id="section4" title="Loops">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Understanding Loops
                </Text>
                <Text mb={4}>
                Loops are a fundamental concept in programming that allow you to execute a block of code multiple times. They are useful for repeating tasks, iterating over data, and automating repetitive processes. In JavaScript, the most common types of loops are <code>for</code> loops and <code>while</code> loops.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                For Loops
                </Text>
                <Text mb={4}>
                The <code>for</code> loop is used when you know in advance how many times you want to iterate. It consists of three parts: initialization, condition, and increment/decrement.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example
                </Text>
                <Text mb={4}>
                Here’s a basic example of a <code>for</code> loop that prints numbers from 0 to 4:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`for (let i = 0; i < 5; i++) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log(i);`}</code></Text>
                <Text><code>{`}`}</code></Text>
                </Box>
                <Text mb={4}>
                In this example:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">Initialization:</Text> <code>let i = 0</code> sets the starting value of <code>i</code>.</li>
                <li><Text as="span" fontWeight="bold">Condition:</Text> <code>i &lt; 5</code> checks if <code>i</code> is less than 5. If <code>true</code>, the loop continues; if <code>false</code>, it stops.</li>
                <li><Text as="span" fontWeight="bold">Increment:</Text> <code>i++</code> increases the value of <code>i</code> by 1 after each iteration.</li>
                </ul>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                While Loops
                </Text>
                <Text mb={4}>
                The <code>while</code> loop is used when you want to repeat a block of code as long as a specified condition remains <code>true</code>. Unlike the <code>for</code> loop, you need to manually manage the initialization, condition, and increment/decrement.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example
                </Text>
                <Text mb={4}>
                Here’s a basic example of a <code>while</code> loop that prints numbers from 0 to 4:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let i = 0;`}</code></Text>
                <Text mb={2}><code>{`while (i < 5) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log(i);`}</code></Text>
                <Text mb={2}><code>{`i++;`}</code></Text>
                <Text><code>{`}`}</code></Text>
                </Box>
                <Text mb={4}>
                In this example:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">Initialization:</Text> <code>let i = 0</code> sets the starting value of <code>i</code>.</li>
                <li><Text as="span" fontWeight="bold">Condition:</Text> <code>i &lt; 5</code> checks if <code>i</code> is less than 5. If <code>true</code>, the loop continues; if <code>false</code>, it stops.</li>
                <li><Text as="span" fontWeight="bold">Increment:</Text> <code>i++</code> increases the value of <code>i</code> by 1 each time the loop executes.</li>
                </ul>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Choosing the Right Loop
                </Text>
                <Text mb={4}>
                The choice between a <code>for</code> loop and a <code>while</code> loop often depends on the situation. Use a <code>for</code> loop when you know the number of iterations in advance, and use a <code>while</code> loop when the number of iterations is not known and depends on a condition that changes during execution.
                </Text>
            </Box>
            </Section>

        <Section id="section5" title="Functions">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Understanding Functions
                </Text>
                <Text mb={4}>
                Functions are a core concept in programming that allow you to group a set of instructions together and reuse them throughout your code. Functions help you avoid repetition, make your code more modular, and improve readability.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Creating Functions
                </Text>
                <Text mb={4}>
                In JavaScript, you can define a function using the <code>function</code> keyword. A function definition includes the function's name, parameters (optional), and a block of code that executes when the function is called.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example
                </Text>
                <Text mb={4}>
                Here’s a basic example of a function that greets a user by their name:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`function greet(name) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`return 'Hello, ' + name;`}</code></Text>
                <Text><code>{`}`}</code></Text>
                </Box>
                <Text mb={4}>
                In this example:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">Function Name:</Text> <code>greet</code> is the name of the function. It is used to call the function later.</li>
                <li><Text as="span" fontWeight="bold">Parameter:</Text> <code>name</code> is a parameter that the function accepts. It represents the data you pass to the function.</li>
                <li><Text as="span" fontWeight="bold">Return Statement:</Text> The <code>return</code> statement outputs the result of the function. In this case, it returns a greeting message concatenated with the <code>name</code> parameter.</li>
                </ul>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Calling Functions
                </Text>
                <Text mb={4}>
                To use a function, you need to call it by its name and provide the necessary arguments. For example, to call the <code>greet</code> function and pass the name "Alice", you would write:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let message = greet('Alice');`}</code></Text>
                <Text>In this case, <code>message</code> will contain the value <Text as="span" fontWeight="bold">"Hello, Alice!"</Text></Text>
                </Box>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Function Parameters and Return Values
                </Text>
                <Text mb={4}>
                Functions can take multiple parameters and return values of any data type. Parameters are enclosed in parentheses and separated by commas, while the return value is specified using the <code>return</code> keyword.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example with Multiple Parameters
                </Text>
                <Text mb={4}>
                Here’s an example of a function that takes two parameters and returns their sum:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`function add(a, b) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`return a + b;`}</code></Text>
                <Text><code>{`}`}</code></Text>
                </Box>
                <Text mb={4}>
                To call this function and get the sum of 5 and 3, you would write:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let sum = add(5, 3);`}</code></Text>
                <Text>In this case, <code>sum</code> will contain the value <Text as="span" fontWeight="bold">8</Text></Text>
                </Box>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Conclusion
                </Text>
                <Text mb={4}>
                Functions are essential for organizing and managing your code. They allow you to encapsulate logic, making your code more readable and maintainable. Experiment with creating and calling functions to become more comfortable with this powerful programming concept.
                </Text>
            </Box>
            </Section>


        <Section id="section6" title="Arrays & Lists">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Understanding Arrays
                </Text>
                <Text mb={4}>
                Arrays are a fundamental data structure in programming used to store multiple values in a single variable. Each value in an array is called an element, and each element has a specific position or index in the array. Arrays are useful for organizing and managing collections of data.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Creating Arrays
                </Text>
                <Text mb={4}>
                In JavaScript, you can create an array using square brackets <code>[]</code>. You can initialize an array with values or leave it empty.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example
                </Text>
                <Text mb={4}>
                Here’s an example of creating an array and accessing its elements:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let numbers = [1, 2, 3];`}</code></Text>
                <Text><code>{`console.log(numbers[0]);`}</code> will output <Text as="span" fontWeight="bold">1</Text></Text>
                </Box>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Array Indexes
                </Text>
                <Text mb={4}>
                Array indexes start at <code>0</code>. This means the first element in the array is at index <code>0</code>, the second element is at index <code>1</code>, and so on. Trying to access an index that is out of bounds will return <code>undefined</code>.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Modifying Arrays
                </Text>
                <Text mb={4}>
                You can modify elements in an array by accessing them through their index and assigning a new value. You can also add new elements using methods such as <code>push()</code> and <code>unshift()</code>.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example
                </Text>
                <Text mb={4}>
                Here’s an example of modifying an array:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let fruits = ['apple', 'banana', 'cherry'];`}</code></Text>
                <Text mb={2}><code>{`fruits[1] = 'blueberry';`}</code></Text>
                <Text mb={2}><code>{`fruits.push('date');`}</code></Text>
                <Text>After these operations, <code>fruits</code> will be <Text as="span" fontWeight="bold">['apple', 'blueberry', 'cherry', 'date']</Text></Text>
                </Box>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Iterating Over Arrays
                </Text>
                <Text mb={4}>
                You can loop through arrays using <code>for</code> loops or array methods like <code>forEach()</code>. This is useful for processing or displaying each element in the array.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Example
                </Text>
                <Text mb={4}>
                Here’s an example of iterating over an array using a <code>for</code> loop:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`let colors = ['red', 'green', 'blue'];`}</code></Text>
                <Text mb={2}><code>{`for (let i = 0; i < colors.length; i++) {`}</code></Text>
                <Text mb={2} pl={4}><code>{`console.log(colors[i]);`}</code></Text>
                <Text><code>{`}`}</code></Text>
                <Text>In this case, the loop will output each color in the array.</Text>
                </Box>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Conclusion
                </Text>
                <Text mb={4}>
                Arrays are powerful tools for managing collections of data. Understanding how to create, modify, and iterate over arrays is crucial for efficient programming. Practice using arrays to become more proficient in handling data structures in your code.
                </Text>
            </Box>
            </Section>


        <Section id="section7" title="Simple Project">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Apply Your Knowledge
                </Text>
                <Text mb={4}>
                Now that you've learned the basics, it's time to put your skills to the test! Use what you've learned to create a fun and practical project. Whether it's a number guessing game, a to-do list app, or something entirely new and creative, this is your chance to experiment and showcase your programming abilities.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Get Creative!
                </Text>
                <Text mb={4}>
                Think outside the box and come up with your own unique project idea. Challenge yourself to implement features you haven't tried before or improve upon existing concepts. The possibilities are endless, and this project will help you solidify your understanding and build your confidence in coding.
                </Text>
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Project Ideas
                </Text>
                <Text mb={4}>
                Here are a few ideas to get you started:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">Number Guessing Game:</Text> Create a game where the user tries to guess a randomly generated number within a certain range.</li>
                <li><Text as="span" fontWeight="bold">To-Do List App:</Text> Build an application where users can add, edit, and delete tasks.</li>
                <li><Text as="span" fontWeight="bold">Personal Diary:</Text> Develop a simple diary application where users can write and save their thoughts.</li>
                <li><Text as="span" fontWeight="bold">Quiz Application:</Text> Design a quiz app that asks multiple-choice questions and provides feedback on answers.</li>
                </ul>
                <Text mb={4}>
                Have fun with your project, and don't be afraid to experiment and learn from your mistakes. Happy coding!
                </Text>
            </Box>
            </Section>


          <Section id="section8" title="Next Steps">
            <Box p={4} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text>Explore the web development or app development sections for more information!</Text>
            </Box>
          </Section>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

function Section({ id, title, children }: SectionProps) {
  return (
    <Box id={id} py={10}>
      <Heading as="h2" size="lg" mb={4} color="gray.300">
        {title}
      </Heading>
      <Box>{children}</Box> {/* Use Box instead of <p> */}
    </Box>
  );
}
