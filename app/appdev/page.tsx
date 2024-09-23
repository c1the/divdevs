/* eslint-disable react/no-unescaped-entities */
import { Flex, Heading, Text, VStack, Box, ChakraProvider, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar2 from '@/components/navbar2';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function Section({ id, title, children }: SectionProps) {
    return (
      <Box id={id} py={10}>
        <Heading as="h2" size="lg" mb={4} color="gray.300">
          {title}
        </Heading>
        <Box>{children}</Box>
      </Box>
    );
  }

export default function AppDevPage() {
  return (
    <ChakraProvider>
      <Navbar2 />
      <Flex bg="gray.700">
        {/* Sidebar */}
        <Box as="nav" width="230px" bg="gray.700" p={4} position="fixed" h="100%" top={16}>
          <VStack align="start" spacing={4} color='gray.200'>
            <a href="#section1">Introduction</a>
            <a href="#section9">Setup</a>
            <a href="#section2">React Basics</a>
            <a href="#section3">State Management</a>
            <a href="#section4">Component Lifecycle</a>
            <a href="#section5">Project</a>
            <a href="#section6">Next Steps</a>
            <Box mt="auto" textAlign="center">
              <Text fontSize="lg" fontWeight="bold" color="gray.100">
                <a href="/homepage">Home</a>
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box ml="250px" p={8} bg="gray.700">
          <Section id="section1" title="Introduction to App Development">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                What is App Development?
              </Text>
              <Text mb={4}>
                App development refers to the creation of software applications that run on mobile devices or web platforms. You will learn how to develop apps using React, a powerful JavaScript library.
              </Text>
            </Box>
          </Section>

          <Section id="section9" title="Setup">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text>
                To begin developing apps using React, you'll need to set up your environment by installing the necessary tools. Here’s how to get started:
                </Text>

                <Text fontSize="lg" fontWeight="bold" mt={4} mb={2}>
                Install Node.js
                </Text>
                <ul>
                <li>
                    <Text as="span" fontWeight="bold">Download Node.js:</Text> Visit the <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js website</a> and download the latest stable version for your operating system.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Install Node.js:</Text> Follow the instructions to install Node.js. This will also install npm, the package manager you'll use to install React and other libraries.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Verify Installation:</Text> Open a terminal and run <code>node -v</code> and <code>npm -v</code> to ensure Node.js and npm were installed correctly.
                </li>
                </ul>

                <Text fontSize="lg" fontWeight="bold" mt={4} mb={2}>
                Install React and Create a New Project
                </Text>
                <ul>
                <li>
                    <Text as="span" fontWeight="bold">Use Create React App:</Text> Open your terminal and run <code>npx create-react-app my-app</code> to generate a new React project.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Navigate to Your Project:</Text> Use <code>cd my-app</code> to move into your project directory.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Start the Development Server:</Text> Run <code>npm start</code> to start the local development server, which will open your app in the browser.
                </li>
                </ul>

                <Text fontSize="lg" fontWeight="bold" mt={4} mb={2}>
                Code Editor Setup (VSCode)
                </Text>
                <ul>
                <li>
                    <Text as="span" fontWeight="bold">Download VSCode:</Text> Head to the <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode website</a> to download the installer for your operating system.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Install VSCode:</Text> Follow the installation instructions and open VSCode once the setup is complete.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Install Extensions:</Text> In VSCode, you can install helpful extensions for React development like ES7 React/Redux/GraphQL snippets and Prettier for formatting.
                </li>
                </ul>

                <Text fontSize="lg" fontWeight="bold" mt={4} mb={2}>
                Alternative Code Editor (Sublime Text)
                </Text>
                <ul>
                <li>
                    <Text as="span" fontWeight="bold">Download Sublime Text:</Text> Visit the <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">Sublime Text website</a> to download the installer.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Install Sublime Text:</Text> Follow the installation instructions and open Sublime Text.
                </li>
                <li>
                    <Text as="span" fontWeight="bold">Install Packages:</Text> Use Package Control in Sublime Text to install useful packages like Babel for React and JavaScript syntax highlighting.
                </li>
                </ul>
                
                <Text mt={4}>
                Once your development environment is set up, you're ready to begin building your app. Happy coding!
                </Text>
            </Box>
            </Section>


        <Section id="section2" title="React Basics">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Introduction to React
                </Text>
                <Text mb={4}>
                React is a popular JavaScript library used to build dynamic user interfaces. It allows developers to build reusable UI components that update efficiently when data changes. Let’s explore some of the fundamental concepts of React.
                </Text>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                JSX
                </Text>
                <Text mb={4}>
                JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code directly within JavaScript. React uses JSX to describe what the UI should look like. For example:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`const element = <h1>Hello, world!</h1>;`}</code></Text>
                <Text mb={2}>
                    The above code creates a React element that renders as an <code>{`<h1>`}</code> heading.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Components
                </Text>
                <Text mb={4}>
                Components are the building blocks of a React application. They are reusable, independent pieces of UI that accept inputs, known as props, and return React elements. A simple functional component might look like this:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`function Welcome(props) { return <h1>Hello, {props.name}</h1>; }`}</code></Text>
                <Text mb={2}>
                    The <code>{`Welcome`}</code> component takes a prop called <code>{`name`}</code> and renders a greeting message.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Props
                </Text>
                <Text mb={4}>
                Props (short for properties) are how data is passed from one component to another in React. They allow you to customize components with external data. For example:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`<Welcome name="Alice" />`}</code></Text>
                <Text>
                    In this example, the prop <code>{`name`}</code> is passed to the <code>{`Welcome`}</code> component, which will display "Hello, Alice."
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                State
                </Text>
                <Text mb={4}>
                State is a built-in React object used to manage dynamic data within a component. Unlike props, which are immutable, state can be updated over time, and changes in state trigger re-rendering of the component. Here’s a simple example using the <code>{`useState`}</code> hook:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`const [count, setCount] = useState(0);`}</code></Text>
                <Text mb={2}>
                    The <code>{`count`}</code> variable holds the state, and <code>{`setCount`}</code> is a function that updates the state.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Putting It All Together
                </Text>
                <Text mb={4}>
                With these basic building blocks—JSX, components, props, and state—you can create interactive and dynamic user interfaces in React. As you become more comfortable with these concepts, you can start building more complex applications.
                </Text>
            </Box>
            </Section>


        <Section id="section3" title="State Management">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Introduction to State Management
                </Text>
                <Text mb={4}>
                State management is an essential part of building dynamic applications in React. State allows you to store and manage changing data within a component. When state changes, the component re-renders to reflect those changes in the UI. Let’s dive into how to manage state using React's built-in <code>{`useState`}</code> hook.
                </Text>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                The <code>{`useState`}</code> Hook
                </Text>
                <Text mb={4}>
                The <code>{`useState`}</code> hook allows you to add state to functional components in React. Here’s an example of how to use it:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`const [count, setCount] = useState(0);`}</code></Text>
                <Text mb={2}>
                    In this example, <code>{`count`}</code> is a state variable initialized with a value of 0, and <code>{`setCount`}</code> is a function used to update the state.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Updating State
                </Text>
                <Text mb={4}>
                You can update state using the function returned by <code>{`useState`}</code>. React will automatically re-render the component when the state changes. For example, to update the <code>{`count`}</code> value, you might have a button that increments it:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`
            function Counter() {
            const [count, setCount] = useState(0);
            
            return (
                <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>
            );
            }
                `}</code></Text>
                <Text mb={2}>
                    In this example, every time the button is clicked, the <code>{`count`}</code> state is updated and the component re-renders to show the new count.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Passing State Between Components
                </Text>
                <Text mb={4}>
                In a larger application, you may need to share state between components. You can pass state down from a parent component to a child component using props. For example:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`
            function ParentComponent() {
            const [message, setMessage] = useState("Hello, world!");

            return (
                <div>
                <ChildComponent message={message} />
                </div>
            );
            }

            function ChildComponent({ message }) {
            return <p>{message}</p>;
            }
                `}</code></Text>
                <Text>
                    In this example, the <code>{`message`}</code> state is declared in the parent component and passed to the child component as a prop.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Conclusion
                </Text>
                <Text mb={4}>
                Managing state effectively is crucial for building dynamic and interactive applications in React. By using the <code>{`useState`}</code> hook and passing state between components, you can create complex applications where the UI updates based on user interaction and data changes.
                </Text>
            </Box>
            </Section>


        <Section id="section4" title="Component Lifecycle">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Introduction to the Component Lifecycle
                </Text>
                <Text mb={4}>
                In React, every component goes through a series of phases from creation to destruction. This process is called the component lifecycle. Understanding the lifecycle is crucial for managing state, handling side effects, and writing clean, efficient code. One of the most commonly used hooks for managing side effects in functional components is <code>{`useEffect`}</code>.
                </Text>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                The <code>{`useEffect`}</code> Hook
                </Text>
                <Text mb={4}>
                The <code>{`useEffect`}</code> hook allows you to perform side effects in functional components. These side effects can include fetching data, interacting with the DOM, or setting up subscriptions. By default, <code>{`useEffect`}</code> runs after every render, but you can control when it runs by providing a dependency array.
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`
            useEffect(() => {
            console.log("Component mounted");

            return () => {
                console.log("Component unmounted");
            };
            }, []);
                `}</code></Text>
                <Text mb={2}>
                    In this example, the <code>{`useEffect`}</code> hook logs a message when the component mounts and another message when the component unmounts. The empty array <code>{`[]`}</code> ensures that the effect runs only once when the component is first rendered.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Managing Side Effects
                </Text>
                <Text mb={4}>
                Side effects like data fetching, subscriptions, or manually updating the DOM can be managed using <code>{`useEffect`}</code>. For example, you might fetch data from an API when the component mounts:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`
            useEffect(() => {
            async function fetchData() {
                const response = await fetch('https://api.example.com/data');
                const data = await response.json();
                console.log(data);
            }
            fetchData();
            }, []);
                `}</code></Text>
                <Text mb={2}>
                    In this example, an asynchronous function is used to fetch data from an API when the component mounts. The empty dependency array <code>{`[]`}</code> ensures that the effect only runs once, avoiding unnecessary re-fetching.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Dependencies and Re-Rendering
                </Text>
                <Text mb={4}>
                The second argument of <code>{`useEffect`}</code> is the dependency array, which controls when the effect runs. If you pass values into the dependency array, the effect will re-run whenever those values change:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`
            useEffect(() => {
            console.log("Count changed:", count);
            }, [count]);
                `}</code></Text>
                <Text mb={2}>
                    In this example, the effect runs only when the <code>{`count`}</code> value changes. This is useful for reacting to specific changes in your state or props.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Cleanup Function
                </Text>
                <Text mb={4}>
                The <code>{`useEffect`}</code> hook can return a cleanup function that runs when the component is unmounted or when the effect is about to re-run. This is useful for cleaning up subscriptions, timers, or any resources that need to be released:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>{`
            useEffect(() => {
            const timer = setInterval(() => {
                console.log("Timer running");
            }, 1000);

            return () => {
                clearInterval(timer); // Cleanup the timer
                console.log("Timer cleaned up");
            };
            }, []);
                `}</code></Text>
                <Text mb={2}>
                    In this example, the effect sets up a timer that runs every second. The cleanup function ensures the timer is cleared when the component unmounts.
                </Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Conclusion
                </Text>
                <Text mb={4}>
                Understanding the React component lifecycle and effectively managing side effects with <code>{`useEffect`}</code> will help you build more robust and efficient applications. With these tools, you can handle asynchronous operations, clean up resources, and control when certain actions happen in your components.
                </Text>
            </Box>
            </Section>


        <Section id="section5" title="Project">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Apply What You’ve Learned
                </Text>
                <Text mb={4}>
                Now that you’ve covered the essentials of React, including state, props, and lifecycle management, it’s time to put your skills into practice. Build a small application that demonstrates these core concepts in action.
                </Text>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Get Creative and Hands-On
                </Text>
                <Text mb={4}>
                This is your chance to get creative and bring your ideas to life using React. Whether it’s a simple app, a dynamic website, or a game, focus on applying the concepts you've learned while exploring new features and possibilities.
                </Text>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Project Ideas
                </Text>
                <Text mb={4}>
                Not sure where to start? Here are some project ideas to inspire you:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">Simple To-Do List:</Text> Build a to-do list application where users can add, delete, and mark tasks as completed.</li>
                <li><Text as="span" fontWeight="bold">Weather App:</Text> Create an app that fetches and displays weather data from an external API.</li>
                <li><Text as="span" fontWeight="bold">Counter App:</Text> Develop a basic counter that increases and decreases a number using React’s <code>{`useState`}</code> hook.</li>
                <li><Text as="span" fontWeight="bold">Quiz Application:</Text> Build a quiz that presents users with multiple-choice questions and displays their score at the end.</li>
                <li><Text as="span" fontWeight="bold">Recipe Finder:</Text> Create an app that searches for recipes based on user input and displays results with images and instructions.</li>
                </ul>

                <Text mb={4}>
                Take your time with this project, and feel free to experiment with different features and ideas. You can use state and props to manage data, handle user input, and display results dynamically. Don’t hesitate to try out new hooks or libraries to expand your knowledge.
                </Text>

                <Text mb={4}>
                Remember, this project is a learning experience, so focus on improving your understanding of React while having fun creating something unique. Happy coding!
                </Text>
            </Box>
            </Section>


          <Section id="section6" title="Next Steps">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text>Explore more advanced topics like {' '}
              <Link href="/resources" color="teal.500"> React Router, context API, or integrating external APIs</Link>. 
              These skills will help you build more complex applications.</Text>
            </Box>
          </Section>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

