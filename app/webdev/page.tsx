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
        <Box>{children}</Box> {/* Use Box instead of <p> */}
      </Box>
    );
  }

export default function WebDevPage() {
  return (
    <ChakraProvider>
      <Navbar2 />
      <Flex bg="gray.700">
        {/* Sidebar */}
        <Box as="nav" width="230px" bg="gray.700" p={4} position="fixed" h="100%" top={16}>
          <VStack align="start" spacing={4} color='gray.200'>
            <a href="#section1">Introduction</a>
            <a href="#section9">Setup</a>
            <a href="#section2">HTML Basics</a>
            <a href="#section3">CSS Basics</a>
            <a href="#section4">JavaScript Basics</a>
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
        <Section id="section1" title="Introduction to Web Development">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                What is Web Development?
                </Text>
                <Text mb={4}>
                Web development involves creating and maintaining websites and web applications. It encompasses everything from designing the layout to implementing interactive features and ensuring the site works properly on different devices and browsers.
                </Text>
                
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Core Technologies
                </Text>
                <Text mb={4}>
                Web development primarily revolves around three core technologies:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">HTML:</Text> The standard markup language for creating web pages. HTML structures the content on a page.</li>
                <li><Text as="span" fontWeight="bold">CSS:</Text> A stylesheet language used to describe the presentation of a document written in HTML. CSS controls the look and feel of the website, including layout, colors, and fonts.</li>
                <li><Text as="span" fontWeight="bold">JavaScript:</Text> A programming language that enables interactive features on web pages, such as form validation, dynamic content updates, and more.</li>
                </ul>
                
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Setting Up Your Environment
                </Text>
                <Text mb={4}>
                To start web development, you'll need to set up your development environment. This includes installing a code editor, setting up version control, and configuring your workspace.
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">Code Editor:</Text> Choose an editor such as VSCode or Sublime Text to write and edit your code.</li>
                <li><Text as="span" fontWeight="bold">Version Control:</Text> Use tools like Git to manage and track changes to your codebase.</li>
                </ul>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Learning Path
                </Text>
                <Text mb={4}>
                As you embark on your web development journey, it's essential to follow a structured learning path. Start with the basics of HTML, then move on to CSS for styling, and finally dive into JavaScript to add interactivity.
                </Text>
                
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Interactive Example
                </Text>
                <Text mb={4}>
                Here is an interactive example that demonstrates a simple HTML structure and CSS styling.
                </Text>
                {/* Interactive Box Placeholder */}
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>&lt;html&gt;&lt;body&gt;&lt;h1&gt;Hello, World!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</code></Text>
                <Text mb={2}>
            <code>&lt;style&gt;h1 {`{`} color: blue; {`}`}&lt;/style&gt;</code>
            </Text>

                <Text>In the example above, the heading "Hello, World!" will appear in blue color.</Text>
                </Box>
            </Box>
        </Section>


          <Section id="section9" title="Setup">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text>To start coding and running your code locally, you can set up a code editor. Here’s how to set up VSCode:</Text>
              <ul>
                <li><Text as="span" fontWeight="bold">Download VSCode:</Text> Go to the <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode website</a> and download the installer for your operating system.</li>
                <li><Text as="span" fontWeight="bold">Install VSCode:</Text> Follow the instructions to install VSCode on your computer.</li>
                <li><Text as="span" fontWeight="bold">Install Extensions:</Text> Install useful extensions like HTML, CSS, and JavaScript extensions from the VSCode marketplace.</li>
                <li><Text as="span" fontWeight="bold">Set Up a Project:</Text> Open VSCode, create a new folder for your project, and start coding!</li>
              </ul>
              <Text>For Sublime Text, the setup process is similar:</Text>
              <ul>
                <li><Text as="span" fontWeight="bold">Download Sublime Text:</Text> Go to the <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">Sublime Text website</a> and download the installer.</li>
                <li><Text as="span" fontWeight="bold">Install Sublime Text:</Text> Follow the installation instructions.</li>
                <li><Text as="span" fontWeight="bold">Install Packages:</Text> Use the Package Control to install useful packages for web development.</li>
              </ul>
            </Box>
          </Section>

          <Section id="section2" title="HTML Basics">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                What is HTML?
                </Text>
                <Text mb={4}>
                HTML (Hypertext Markup Language) is the standard language used to create and design web pages. It provides the basic structure for web documents and consists of a series of elements that tell the browser how to display content.
                </Text>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                HTML Elements
                </Text>
                <Text mb={4}>
                HTML elements are the building blocks of web pages. Each element consists of a start tag, content, and an end tag. For example:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>&lt;h1&gt;This is a Heading&lt;/h1&gt;</code></Text>
                <Text mb={2}><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Common HTML Tags
                </Text>
                <Text mb={4}>
                Here are some common HTML tags and their uses:
                </Text>
                <ul>
                <li><Text as="span" fontWeight="bold">&lt;h1&gt; to &lt;h6&gt;:</Text> Define headings, with &lt;h1&gt; being the largest and &lt;h6&gt; the smallest.</li>
                <li><Text as="span" fontWeight="bold">&lt;p&gt;:</Text> Defines a paragraph of text.</li>
                <li><Text as="span" fontWeight="bold">&lt;a&gt;:</Text> Defines a hyperlink, which is used to link from one page to another.</li>
                <li><Text as="span" fontWeight="bold">&lt;img&gt;:</Text> Embeds an image into the page.</li>
                </ul>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Attributes
                </Text>
                <Text mb={4}>
                HTML elements can have attributes that provide additional information about the element. Attributes are always specified in the opening tag and usually come in name-value pairs:
                </Text>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code></Text>
                <Text mb={2}><code>&lt;img src="image.jpg" alt="Description"&gt;</code></Text>
                </Box>

                <Text fontSize="lg" fontWeight="bold" mb={4}>
                Interactive Example
                </Text>
                <Text mb={4}>
                Here’s an interactive example where you can see how changing HTML elements affects the content on the page.
                </Text>
                {/* Interactive Box Placeholder */}
                <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>&lt;div&gt;Hello, World!&lt;/div&gt;</code></Text>
                <Text>The above code creates a <Text as="span" fontWeight="bold">div</Text> element with the text "Hello, World!"</Text>
                </Box>
            </Box>
            </Section>


          <Section id="section3" title="CSS Basics">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                What is CSS?
              </Text>
              <Text mb={4}>
                CSS (Cascading Style Sheets) is a language used to describe the presentation of a document written in HTML. CSS allows you to apply styles such as fonts, colors, and layouts to your web pages, making them visually appealing.
              </Text>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                CSS Selectors
              </Text>
              <Text mb={4}>
                CSS selectors are used to target HTML elements and apply styles to them. Common selectors include:
              </Text>
              <ul>
                <li><Text as="span" fontWeight="bold">Element Selector:</Text> Targets elements by their HTML tag (e.g., <code>p</code> for paragraphs).</li>
                <li><Text as="span" fontWeight="bold">Class Selector:</Text> Targets elements by their class attribute (e.g., <code>.classname</code>).</li>
                <li><Text as="span" fontWeight="bold">ID Selector:</Text> Targets a unique element by its ID (e.g., <code>#idname</code>).</li>
              </ul>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Properties and Values
              </Text>
              <Text mb={4}>
                CSS consists of properties and values that define the appearance of elements. For example:
              </Text>
              <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>color: blue;</code> - Changes the text color to blue.</Text>
                <Text mb={2}><code>font-size: 16px;</code> - Sets the text size to 16 pixels.</Text>
                <Text mb={2}><code>margin: 10px;</code> - Adds 10 pixels of space around an element.</Text>
              </Box>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Box Model
              </Text>
              <Text mb={4}>
                The CSS box model is a fundamental concept that describes the rectangular boxes generated for elements in a document tree. Each box has four parts:
              </Text>
              <ul>
                <li><Text as="span" fontWeight="bold">Content:</Text> The actual content of the element.</li>
                <li><Text as="span" fontWeight="bold">Padding:</Text> Space between the content and the border.</li>
                <li><Text as="span" fontWeight="bold">Border:</Text> Surrounds the padding (if any) and content.</li>
                <li><Text as="span" fontWeight="bold">Margin:</Text> Space outside the border.</li>
              </ul>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Interactive Example
              </Text>
              <Text mb={4}>
                Experiment with this interactive example to see how different CSS properties affect the layout and style of elements.
              </Text>
              {/* Interactive Box Placeholder */}
              <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>p &#123; color: red; font-size: 20px; &#125;</code></Text>
                <Text>This CSS code changes the text color of a paragraph to red and sets the font size to 20 pixels.</Text>
              </Box>
            </Box>
          </Section>


          <Section id="section4" title="JavaScript Basics">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                What is JavaScript?
              </Text>
              <Text mb={4}>
                JavaScript is a programming language that allows you to add interactivity and dynamic content to your web pages. It’s essential for creating interactive elements such as sliders, forms, and animations, and it runs directly in the browser.
              </Text>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Variables
              </Text>
              <Text mb={4}>
                Variables are used to store data values in JavaScript. You can declare a variable using the <code>let</code>, <code>const</code>, or <code>var</code> keyword. For example:
              </Text>
              <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>let message = "Hello, World!";</code></Text>
                <Text>This stores the string "Hello, World!" in a variable called <code>message</code>.</Text>
              </Box>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Functions
              </Text>
              <Text mb={4}>
                Functions are blocks of code that can be reused and executed when called. They can accept inputs (parameters) and return outputs. Here’s an example of a simple function:
              </Text>
              <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>function greet(name) &#123; return "Hello, " + name; &#125;</code></Text>
                <Text>This function takes a <code>name</code> as a parameter and returns a greeting message.</Text>
              </Box>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Events
              </Text>
              <Text mb={4}>
                Events are actions that occur in the browser, such as clicking a button or submitting a form. JavaScript allows you to respond to these events by attaching event listeners. For example:
              </Text>
              <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>button.addEventListener("click", function() &#123; alert("Button clicked!"); &#125;);</code></Text>
                <Text>This code listens for a click event on a button and shows an alert message when the button is clicked.</Text>
              </Box>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Interactive Example
              </Text>
              <Text mb={4}>
                Try this interactive example to see how JavaScript can make your page interactive.
              </Text>
              {/* Interactive Box Placeholder */}
              <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                <Text mb={2}><code>document.querySelector("button").addEventListener("click", function() &#123; console.log("Button clicked!"); &#125;);</code></Text>
                <Text>In this example, clicking the button will log a message to the console.</Text>
              </Box>
            </Box>
          </Section>


          <Section id="section5" title="Project">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Apply What You’ve Learned
              </Text>
              <Text mb={4}>
                Now that you’ve gained a solid foundation in HTML, CSS, and JavaScript, it’s time to apply your skills by building a project. This is an opportunity to take everything you’ve learned and turn it into a functional web page or small application.
              </Text>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Get Creative and Hands-On
              </Text>
              <Text mb={4}>
                Use your imagination to create something new and exciting! Whether it's a personal website, a small game, or an interactive web app, this project will allow you to experiment with different features and solidify your understanding of web development.
              </Text>

              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Project Ideas
              </Text>
              <Text mb={4}>
                If you’re looking for inspiration, here are some project ideas to get you started:
              </Text>
              <ul>
                <li><Text as="span" fontWeight="bold">Personal Portfolio:</Text> Build a website to showcase your work and skills.</li>
                <li><Text as="span" fontWeight="bold">Weather App:</Text> Create an app that displays the weather using a weather API.</li>
                <li><Text as="span" fontWeight="bold">Interactive Quiz:</Text> Develop a quiz that allows users to answer questions and get real-time feedback.</li>
                <li><Text as="span" fontWeight="bold">Task Manager:</Text> Build a to-do list where users can add, update, and delete tasks.</li>
              </ul>

              <Text mb={4}>
                Take your time with the project, and don’t hesitate to explore new features or concepts. This is your chance to show off your creativity and problem-solving skills while enhancing your web development abilities.
              </Text>
            </Box>
          </Section>


          <Section id="section6" title="Next Steps">
            <Box p={6} bg="gray.300" borderRadius="md" boxShadow="md">
            <Text mb={4}>
              Dive deeper into web development by exploring more advanced topics such as{' '}
              <Link href="/resources" color="teal.500">
                React, Next.js, state management, authentication, and performance optimization
              </Link>.
            </Text>
            </Box>
          </Section>
        </Box>
      </Flex>
    </ChakraProvider>
  )

  
}
