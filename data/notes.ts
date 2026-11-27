import { Note } from "@/types/note";

// All the tags a note can have.
export const tags: string[] = ["Work", "Study", "Personal", "Ideas", "Shopping"];

// Each tag has its own colour. The class names are written in full so Tailwind can find them.
export const tagColours: Record<string, string> = {
  Work: "bg-sky-100 text-sky-700",
  Study: "bg-emerald-100 text-emerald-700",
  Personal: "bg-rose-100 text-rose-700",
  Ideas: "bg-violet-100 text-violet-700",
  Shopping: "bg-amber-100 text-amber-700",
};

// Mock data: our app has no backend, so all notes live in this file.
// Notes are written newest first. Some notes have an optional image.
export const notes: Note[] = [
  {
    id: 1,
    title: "Web Programming Assignment 3 plan",
    tag: "Study",
    date: "2026-11-26",
    image: "/images/study-desk.svg",
    content: `Today we finally sat down in the library and divided the Next.js assignment properly. The deadline is the 29th at midnight, so we have less time than it feels like. Last semester we left everything for the final night and the build broke at 11 PM, so this time we want to be done one day early.

Who is doing what:
- Ahmed: root layout, navbar, footer, home page, about page and the overall colours.
- Roshni: notes listing page, search bar, tag filter, sort dropdown and the note detail page with the dynamic route.
- Jan: the create note form, validation messages, editing a note and the favourites feature.

Things we must not forget, because they are in the marking table:
- At least five routes, one dynamic route and a not-found page.
- A loading.tsx file for at least one route.
- A metadata title and description on every single page.
- At least eight components, each with a props interface.
- Images must use next/image and lists must use .map() with a key.
- npm run build must pass without errors.

Ma'am also said that every member has to make real commits in the shared GitHub repository, not just one person pushing everything. So each of us will commit our own files from our own laptops, with our own names set in git config.

For the video, every member explains their own part. We will practise once on Friday night so nobody freezes while recording. The plan is to keep the code simple enough that we can explain every line if she asks us. If someone gets stuck on something, message the group first instead of staying stuck for two hours like last time.`,
  },
  {
    id: 2,
    title: "Monthly grocery list (November)",
    tag: "Shopping",
    date: "2026-11-25",
    image: "/images/grocery-bag.svg",
    content: `Ammi asked me to do the big grocery run this month because Abbu is travelling. Going to the Metro on Saturday morning, because the evenings are far too crowded and the parking is a nightmare. Budget is roughly 18,000 rupees, so I need to be careful and not throw random snacks into the trolley like last time.

Kitchen basics:
- Atta 20 kg bag
- Basmati rice 5 kg
- Daal chana, daal masoor and white chickpeas, 1 kg each
- Cooking oil 5 litre tin
- Sugar 3 kg and salt 2 packets
- Tea, the big pack, plus one small pack of green tea for Baji

Fridge items:
- Milk 6 litres (check the dates, last time two packs were expiring)
- Yoghurt 2 kg
- Eggs, 2 dozen
- Butter and one pack of cheese slices for breakfast

Vegetables and fruit (better from the Sunday bazaar, it is cheaper there):
- Onions, tomatoes, potatoes, ginger and garlic
- Green chillies, coriander and mint
- Bananas, apples and some guavas, since they are in season

Cleaning and other things:
- Dishwashing liquid and sponges
- Washing powder, the big bag
- Tissue rolls and shampoo

Remember to take the cloth bags from the car, because the shop charges for plastic bags now. Also compare the price of the oil tin with the online store before buying; last month the online price was about 300 rupees less. Keep the receipt and send a photo to Ammi so she can check the total against her budget notebook.`,
  },
  {
    id: 3,
    title: "Team meeting notes: client website",
    tag: "Work",
    date: "2026-11-24",
    content: `Meeting with the team at the internship office, around 45 minutes. Present were Sir Kamran, Hira, Usman and me. The main topic was the website for the furniture shop client and what is still pending before the demo next week.

What we finished last week:
- Home page design is approved by the client.
- The product listing page shows all items from the sample data.
- The contact form sends a fake confirmation message.

What the client wants changed:
1. The logo looks blurry on mobile, so we need a better quality file from them.
2. The product cards should show the price more clearly, maybe in bold.
3. They want a WhatsApp button on every page, at the bottom right corner.
4. The about page has too much text, so it needs to be shorter and friendlier.

Who is doing what:
- Hira will fix the product cards and the price style.
- Usman will add the WhatsApp button and test it on his phone.
- I will rewrite the about page text and ask the client for the logo file.
- Sir Kamran will prepare the demo link and talk to the client about the deadline.

Sir Kamran said something I want to remember: the client does not care how clever the code is, they care whether the website looks clean and loads fast. So we should test every page on a slow mobile connection before the demo, not only on office Wi-Fi.

Next meeting is on Monday at 11 AM. Before that, everyone should push their changes and write one line in the group chat about what is done and what is blocked. If anything is blocked, tell Sir Kamran on Friday, not on Monday morning.`,
  },
  {
    id: 4,
    title: "App idea: campus bus tracker",
    tag: "Ideas",
    date: "2026-11-23",
    content: `Waiting at the bus point for 25 minutes again today gave me this idea. Half the students at the stop were asking each other "has the bus left or not?" and nobody actually knew. There has to be a simpler way.

The idea: a small web app that shows where each university bus is and roughly when it will reach each stop. Students open the page, choose their route, and see something like "Bus 4 is 2 stops away, about 8 minutes".

How it could work in a simple version:
- Each driver has a cheap phone that sends its location every 30 seconds.
- The app shows the routes on a list, not even a map at first, just stops in order.
- The current position of the bus is highlighted in the list.
- Students can star their usual stop so it shows at the top.

Features for later, if the first version works:
- A notification when the bus is two stops away.
- A small "bus is full" button that the driver can press.
- History of delays, so the transport office can see which route is always late.

Problems I can already see:
1. Drivers may not want to keep a phone on all day, so the battery and data cost need a solution.
2. The transport office would need to agree to it.
3. If the internet at the bus point is weak, the page must load fast and be very light.

I think this could be a good final year project idea, or at least a hackathon project. Talk to Sir about it after the Web Programming lecture and ask whether the transport office has ever tried something like this before. Also ask the seniors in the ACM society if anyone has worked on GPS tracking.`,
  },
  {
    id: 5,
    title: "Gym routine for winter",
    tag: "Personal",
    date: "2026-11-22",
    image: "/images/dumbbell.svg",
    content: `Every winter I stop going to the gym because it is cold and dark by 5 PM, and every March I regret it. This year I am writing a proper routine so I do not have to think about it, I just follow it. Three days a week is enough, as long as I am consistent.

Monday: chest and arms
- 10 minutes warm-up on the cycle
- Bench press, 3 sets of 10
- Push-ups, 3 sets until I cannot do more
- Bicep curls and tricep dips, 3 sets of 12 each

Wednesday: back and legs
- 10 minutes brisk walk on the treadmill
- Squats, 4 sets of 10 (start light, my knee was hurting last time)
- Lat pulldown, 3 sets of 12
- Lunges, 3 sets of 10 on each leg
- Plank, 3 rounds of 45 seconds

Friday: cardio and stretching
- 25 minutes on the treadmill, a mix of walking and jogging
- 10 minutes of skipping in short rounds
- 15 minutes of slow stretching, especially the back and hamstrings

Rules for myself:
1. Go straight from university, do not go home first. Once I am home, I am not leaving the bed.
2. Sleep before midnight on gym nights.
3. Drink at least two big bottles of water a day, even though it is winter.
4. Eat eggs or daal after the workout, not chips.

The goal is not to become a bodybuilder. I just want to feel less tired, have less back pain from sitting all day, and be able to climb to the fourth floor of the CS block without breathing like an old man. I will check this note again at the end of December and see how many days I actually went.`,
  },
  {
    id: 6,
    title: "React hooks revision notes",
    tag: "Study",
    date: "2026-11-21",
    content: `Revision notes from Sir's lecture and the React documentation, written in my own words so I can actually remember them in the viva.

What is state?
State is data that belongs to a component and can change over time. When state changes, React runs the component function again and updates the screen. A normal variable will not do this, because React does not know it changed.

useState
const [count, setCount] = useState(0);
- count is the current value.
- setCount is the function we call to change it.
- 0 is the starting value.
We must never change state directly, like count = 5. Always call the setter.

Arrays in state
To add an item: setItems([...items, newItem]). The three dots copy the old array, then the new item goes at the end.
To remove an item: setItems(items.filter((item) => item.id !== idToRemove)).
We always make a new array instead of changing the old one, so React notices the change.

Controlled inputs
The value of the input comes from state, and every keystroke updates state through onChange. That way React is always the single source of truth for the form.

Event handlers
onClick, onChange and onSubmit take a function. We pass the function itself, like onClick={handleClick}, not the result of calling it. If we need to pass an argument, we wrap it: onClick={() => handleDelete(note.id)}.

Why 'use client' in Next.js?
Hooks and event handlers only work in the browser. In Next.js, components are Server Components by default, so any component that uses useState or onClick needs 'use client' at the very top of the file.

Practice: build a small counter and a to-do list from scratch without looking at the slides.`,
  },
  {
    id: 7,
    title: "Books I want to read this year",
    tag: "Personal",
    date: "2026-11-20",
    content: `I used to read a lot in school and then university and my phone slowly took over. Screen time last week was more than six hours a day, which is honestly embarrassing. So the plan is simple: read 20 pages every night before sleeping, phone in the other room.

Books on my list:
1. Atomic Habits by James Clear. Everyone recommends it and it is about small daily improvements, which is exactly what I need right now.
2. Deep Work by Cal Newport. About focusing without distractions. Probably the most useful one for exam season.
3. Clean Code by Robert Martin. Sir mentioned it in class. Even a few chapters on naming and small functions should help my assignments.
4. The Alchemist by Paulo Coelho. A short novel, good to start with so I build the habit before reading the heavier books.
5. Peer-e-Kamil by Umera Ahmed. Baji has been telling me to read it for two years.
6. Sapiens by Yuval Noah Harari. Long, so maybe in the summer holidays.

How I will actually do it:
- Borrow from the university library first, buy only if I really like the book.
- Keep a small list at the back of my diary with the date I start and finish each book.
- Write three or four lines after every book about what I learned, so it does not just disappear from my head.
- If a book is boring after 50 pages, it is allowed to stop. No guilt.

Reading friends: Hamza said he also wants to read Atomic Habits, so we can discuss it over chai once a week. That might keep both of us honest. Goal for this semester is to finish at least three books from this list before the final exams start.`,
  },
  {
    id: 8,
    title: "Client feedback summary for the portfolio site",
    tag: "Work",
    date: "2026-11-19",
    content: `Got a long voice note from the photographer client today, so I am writing the main points down before I forget them. Overall she is happy with the first version, but a few things need to change before she shares the link with her customers.

What she liked:
- The gallery layout and the white background, which she said makes the photos stand out.
- The contact form is simple and does not ask for too much information.
- The site loads quickly on her phone.

What she wants changed:
1. Bigger buttons on mobile. She said her older customers struggle to tap the small "Book now" link.
2. A clearer pricing section with three packages: basic, standard and wedding.
3. Her Instagram link should be at the top, not only in the footer.
4. The about page needs a photo of her, and the text should sound less formal, more like how she talks.
5. The gallery should be grouped by category: weddings, portraits and events.

Questions I need to ask her:
- Does she want prices shown openly, or "contact for price"?
- Can she send higher quality versions of the first six photos? Some look soft on a large screen.
- Does she have a deadline, maybe before the wedding season starts in December?

My plan for this week:
- Tuesday: increase button sizes and move the Instagram link.
- Wednesday: build the pricing section with three cards.
- Thursday: add the category filter to the gallery.
- Friday: send her a new preview link with a short message listing what changed.

Note to self: reply to her today with a short message, so she knows the feedback was received. Last time I waited three days and she thought I had forgotten about the project.`,
  },
  {
    id: 9,
    title: "Birthday gift ideas for Abbu",
    tag: "Shopping",
    date: "2026-11-18",
    content: `Abbu's birthday is on the 5th of December and this year I want to get him something he will actually use, not another perfume that sits in the cupboard. Baji and I are splitting the cost, so the total budget is around 10,000 rupees.

Ideas so far:
1. A good wrist watch. His old one has a cracked glass and he keeps saying he will fix it but never does. A simple analog watch with a leather strap would suit him.
2. A warm shawl. He goes for a walk every morning after Fajr and it gets really cold in December.
3. Wireless earphones. He listens to old songs and the news on his phone all the time with a very old wired pair.
4. A book of Iqbal's poetry with a nice cover. He quotes Iqbal all the time.
5. A table lamp for his reading chair, since he always complains that the light in the lounge is too dim for reading.

Thinking it through:
- The watch is the most "gift-like" option and he will wear it every day.
- The shawl is practical, but he might feel it is too ordinary for a birthday.
- The earphones might be confusing for him to connect, unless I set them up for him myself.

Current plan: get the watch as the main gift, and add the Iqbal book as a small extra if the budget allows. Check prices at the watch shop in the mall on Saturday, and compare them with the online stores before buying.

Also, plan a small dinner at home with his favourite chicken karahi from the place near the market. Ammi already agreed to make kheer. Remember to order the cake one day before, and do not let Chotu tell Abbu anything this time.`,
  },
  {
    id: 10,
    title: "Database exam topics and plan",
    tag: "Study",
    date: "2026-11-17",
    content: `Database Systems mid-term is in nine days. The paper is out of 50 and Sir said it will be mostly problems, not theory, so practising is more important than memorising definitions.

Topics in the syllabus:
1. ER diagrams: entities, attributes, relationships, cardinality and weak entities.
2. Converting an ER diagram into tables.
3. Normalization: 1NF, 2NF and 3NF, and functional dependencies.
4. SQL: SELECT with WHERE, ORDER BY and GROUP BY with HAVING.
5. Joins: inner, left and right joins, and when to use each one.
6. Subqueries and nested queries.
7. Basic idea of indexes and transactions (only short questions, Sir said).

Where I am weak:
- Normalization. I understand the definitions but get confused when a real table has many dependencies.
- GROUP BY with HAVING. I keep putting conditions in WHERE that should be in HAVING.

Study plan:
- Day 1 and 2: ER diagrams. Draw the three examples from the slides again without looking.
- Day 3 and 4: normalization. Do all the past paper questions, then explain one to Roshni to check if I really understand it.
- Day 5 and 6: SQL practice on the lab computers using the university database we made in the lab.
- Day 7: joins and subqueries, mixed practice.
- Day 8: full past paper with a timer, 90 minutes, no phone.
- Day 9: only revision of mistakes, and sleep early.

Group study session on Thursday in the library at 3 PM with Roshni and Jan. Each person brings five SQL questions for the others to solve on paper. Whoever gets the most wrong buys the chai.`,
  },
  {
    id: 11,
    title: "Blog post idea: Server vs Client Components",
    tag: "Ideas",
    date: "2026-11-16",
    content: `While doing the Next.js assignment I realised that the hardest thing to understand was not the code itself, it was the difference between Server Components and Client Components. I think a simple blog post explaining this in plain language could help other students, and writing it would also help me prepare for the viva.

Working title: "Server vs Client Components, explained like you are new to Next.js".

Outline:
1. The problem: why does Next.js complain when I use useState in a page?
2. A simple comparison. A Server Component is like a printed menu at a restaurant: it is prepared before you arrive and you just read it. A Client Component is like the waiter who reacts when you call them.
3. Server Components: they run on the server, send ready HTML and do not need any JavaScript in the browser. Good for pages that only show data.
4. Client Components: they start with 'use client', run in the browser and can use state and click handlers. Good for search boxes, forms and buttons.
5. A real example from our Notes app: the notes page is a Server Component, but the search and filter part inside it is a Client Component.
6. Common mistakes: putting 'use client' on every file, or trying to use onClick in a Server Component.
7. A short checklist: if it needs useState, useEffect or an event handler, it must be a Client Component.

Things to include:
- Small code snippets, not long ones.
- One simple diagram showing which parts of the page run where.
- A short summary at the end that someone can screenshot.

Where to post it: maybe on Medium or the ACM society page. Ask Sir if he can share it with the class after the assignment deadline.`,
  },
  {
    id: 12,
    title: "Monthly budget for the semester",
    tag: "Personal",
    date: "2026-11-15",
    content: `Every month the money finishes around the 20th and then I am borrowing from Hamza for the rest of the month. That has to stop. This month I am writing everything down and seeing where the money actually goes.

Money coming in:
- Pocket money from home: 25,000
- Freelance work (the portfolio website): about 15,000 if the client pays on time
Total: around 40,000 rupees

Fixed costs:
- Hostel share and mess: 18,000
- Internet package: 2,500
- Mobile package: 1,000
- University bus card: 3,000

Flexible costs (this is where the money disappears):
- Eating out and the café: I guessed 3,000, but it was probably closer to 7,000 last month
- Online shopping: 4,000 (mostly things I did not really need)
- Ride-hailing when I miss the bus: 2,000

New plan:
1. Café limit of 4,000 for the whole month, and I will track every rupee in this note.
2. No online shopping unless it is something for university.
3. Leave the hostel ten minutes earlier so I stop missing the bus.
4. Save 5,000 every month in a separate account, transferred on the first day before I can spend it.
5. Keep 2,000 as an emergency amount for medicine or anything sudden.

What I am saving for: a better laptop before the final year project starts. The current one takes three minutes just to run npm install and the battery lasts maybe forty minutes. If I save 5,000 a month plus any freelance money, I should have a decent amount by the summer.

Check this note on the 30th and compare the real spending with the plan.`,
  },
  {
    id: 13,
    title: "Sprint tasks for the internship project",
    tag: "Work",
    date: "2026-11-14",
    content: `New two-week sprint started today at the internship. We are working on the internal leave management system for the company's staff. My tasks are mostly on the frontend side, which is good, because it matches what we are learning in Web Programming.

My tasks for this sprint:
1. Fix the login page bug where the error message appears behind the form on small screens.
2. Build the "Apply for leave" form with proper validation: start date, end date, leave type and a reason with at least 20 characters.
3. Show a clear success message after the form is submitted.
4. Update the README with setup steps, because the new intern spent a whole day trying to run the project.
5. Review two pull requests from Usman and leave helpful comments, not just "looks good".

Things the team lead told me to remember:
- Write small commits with clear messages, not one huge commit at the end of the week.
- Test on mobile, because many staff members will use this on their phones.
- If I am stuck for more than an hour, ask someone. Nobody will be angry.

Questions to ask in the stand-up tomorrow:
- Should the end date be allowed to be before the start date? Obviously not, but do we show an error or disable those dates?
- Is there a maximum number of leave days per request?

Progress so far:
- The login bug is fixed. It was a z-index issue, the error message had a lower layer than the form card.
- The leave form layout is done, validation is still pending.

Goal: finish the form by Wednesday, so I have Thursday and Friday for the pull request reviews and the README. Demo is on the last Friday of the sprint.`,
  },
  {
    id: 14,
    title: "Laptop accessories to buy",
    tag: "Shopping",
    date: "2026-11-13",
    content: `My neck has been hurting from looking down at the laptop for hours every day, especially during assignment week. Hamza suggested a laptop stand and an external keyboard, and honestly it makes sense since I sit at the desk for five or six hours a day.

What I need:
1. Laptop stand. An adjustable aluminium one, so the screen is at eye level. Around 2,500 to 3,500 rupees.
2. Wireless mouse. The touchpad is fine for browsing but terrible for design work and selecting code. Around 1,500.
3. External keyboard. A simple one is enough, it does not need to be mechanical or have RGB lights. Around 2,500.
4. USB-C hub. My laptop has only two ports, and one is always used by the charger. I need HDMI for the projector in presentations, and one more USB port. Around 3,000.
5. Laptop sleeve. My bag has no padding and I am always scared when the bag hits the bus door. Around 1,500.

Total estimate: 11,000 to 12,000 rupees, which is a lot, so priorities:
- Must buy now: laptop stand and mouse, because they help my neck and speed right away.
- Next month: keyboard and USB-C hub.
- Can wait: the sleeve. I can use an old sweater wrapped around the laptop for now.

Where to buy:
- Check Hafeez Centre if anyone from the group is going to Lahore over the weekend.
- Otherwise compare the online stores, but read the reviews carefully, because the cheap stands wobble.
- Ask in the class WhatsApp group, since someone might be selling a used stand.

Also, I need to fix my chair height and sit properly, instead of lying on the bed with the laptop on my stomach.`,
  },
  {
    id: 15,
    title: "Tailwind CSS tips I keep forgetting",
    tag: "Study",
    date: "2026-11-12",
    content: `A list of Tailwind things I keep searching again and again. Writing them here so I search less and build more.

Responsive design
- Tailwind is mobile first. Classes without a prefix apply to all screens, and sm:, md: and lg: apply from that width and above.
- sm is 640px, md is 768px, lg is 1024px and xl is 1280px.
- Example: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shows one column on mobile, two on tablets and three on laptops.

Spacing
- p-4 is padding on all sides, px-4 is left and right, py-4 is top and bottom.
- The number times 4 gives the pixels, so p-4 is 16px.
- space-y-4 adds vertical space between children, which is great for forms.
- gap-4 is the spacing inside flex and grid layouts.

Flexbox quick ones
- flex items-center justify-between puts things on both sides, like a navbar.
- flex-wrap lets items go to the next line on small screens.
- flex-col sm:flex-row stacks items on mobile and puts them side by side on bigger screens.

Text
- text-sm, text-lg and text-2xl for size, font-semibold and font-bold for weight.
- line-clamp-3 cuts long text after three lines and adds dots.
- whitespace-pre-line keeps line breaks from the text, which is useful for notes.

Colours
- Pick one main colour and use only two or three shades of it, for example teal-600 for buttons and teal-50 for backgrounds.
- Grey text in slate-500 or slate-600 looks softer than black.

Hover and focus
- hover:bg-teal-700 for buttons.
- focus:ring-2 on inputs so keyboard users can see where they are.

Mistake I made: building class names with string joining, like "bg-" + colour. Tailwind cannot see those, so the full class name must be written in the code.`,
  },
  {
    id: 16,
    title: "Weekend trip idea: Nathia Gali",
    tag: "Ideas",
    date: "2026-11-11",
    image: "/images/mountains.svg",
    content: `The whole group has been stressed with assignments and quizzes, so we were talking about a short trip after the mid-terms. Nathia Gali came up because it is close to Islamabad, the drive is beautiful, and it should be cold and quiet in December.

Rough plan:
- Leave on Saturday at 7 AM, so we reach before lunch and avoid the traffic in Murree.
- Stop for breakfast at a dhaba on the way, the paratha and chai places near Barian.
- Walk the Pipeline Track from Nathia Gali towards Dunga Gali. It is flat and easy, about 4 km.
- If the weather is clear, go up to Mushkpuri top. It is a steep climb, so only those who want to.
- Stay one night and come back on Sunday afternoon.

Who might come: me, Hamza, Roshni, Jan and maybe Ali. Five people fits nicely in one hired car with a driver.

Budget per person (rough):
- Car with driver, shared: around 3,000
- Hotel, one night, shared rooms: around 3,500
- Food: around 2,500
- Total: about 9,000 each

Things to check before booking:
1. Weather forecast. If there is heavy snow, the roads can close and we could get stuck.
2. Whether the hotel has proper heating, because last time in Murree the heater did not work.
3. Everyone's parents' permission, especially for the overnight stay.

Packing list: warm jacket, gloves, woolly cap, good shoes for walking, power bank, some basic medicine, and snacks for the car. Also, take a proper camera if Ali brings his, because phone photos never capture the view properly.

Decision by next Friday, so the hotel can be booked in time.`,
  },
  {
    id: 17,
    title: "Morning routine I want to follow",
    tag: "Personal",
    date: "2026-11-10",
    content: `Most days I wake up at 8:15 for a 9:00 class, skip breakfast, and feel tired and annoyed until lunch. I have tried "waking up early" many times, but I always set a goal that is too big. This time the plan is small and realistic.

The routine:
1. Wake up at 7:00. The alarm goes on the table across the room, not next to the bed, so I have to stand up.
2. Pray Fajr if I woke up for it, or at least sit quietly for five minutes without the phone.
3. Drink a full glass of water first, before tea.
4. Ten minutes of light exercise: stretching, twenty push-ups and some squats. Not a full workout, just enough to wake the body up.
5. A proper breakfast: paratha or eggs with tea, not just a biscuit on the way.
6. Spend five minutes looking at the day's timetable and writing the top three tasks on a sticky note.
7. Leave at 8:15 so I reach the bus point early and do not have to run.

Rules:
- No phone until I have finished breakfast. Instagram can wait.
- Sleep by 12:00 at the latest. The routine fails completely if I sleep at 3 AM.
- Missing one day is fine, but I must not miss two days in a row.

How I will track it: a small table in my diary with the dates and a tick for each day I follow it. At the end of the month I count the ticks. If I hit 20 out of 30 days, I will buy myself something small, maybe the book I have been wanting.

Why this matters: I noticed I study much better in the morning. If I can get even one hour of focused work before class, the whole day feels less rushed.`,
  },
  {
    id: 18,
    title: "Presentation prep: Software Engineering project",
    tag: "Work",
    date: "2026-11-09",
    content: `Our Software Engineering project presentation is next Tuesday at 10 AM. We have 12 minutes plus 5 minutes of questions. Sir is strict about time, so the last group got cut off in the middle of their demo. We cannot let that happen to us.

Slide plan (10 slides at most):
1. Title slide with the group members and roll numbers.
2. The problem we are solving, in one sentence and one picture.
3. Who the users are and what they need.
4. Functional requirements, the top six only.
5. Use case diagram.
6. System architecture, a simple diagram.
7. Screenshots of the main screens.
8. Live demo (around four minutes).
9. Challenges we faced and how we solved them.
10. Thank you and questions.

Who speaks when:
- Slides 1 to 3: Ahmed
- Slides 4 to 6: Roshni
- Slides 7 and 8 with the demo: Jan
- Slides 9 and 10: Ahmed again, then everyone handles the questions together

Rules for the slides:
- Maximum five bullet points per slide, and no full paragraphs.
- Big fonts, at least size 24, because the projector in Room 3 is very faded.
- The same colours and font on every slide.

Backup plan for the demo: record a two-minute screen video of the demo in advance. If the Wi-Fi or the laptop fails, we play the video instead of panicking.

Practice: a full run-through on Sunday evening on video call with a timer. Then a second practice on Monday in an empty classroom with the real projector, if we can find one free. Each person should also prepare answers to two questions Sir might ask about their part.`,
  },
  {
    id: 19,
    title: "Things to buy for the hostel room",
    tag: "Shopping",
    date: "2026-11-08",
    content: `Shifting to the new hostel room next week, and the room is completely empty except for a bed, a cupboard and a small table. My roommate Ali and I made a list of things we need, and we will split the shared items equally.

Shared items (split 50/50):
- Electric kettle for tea and instant noodles at night. This is the most important item on the whole list.
- Extension board with at least four sockets, because there is only one plug point near the table.
- Small dustbin and a pack of garbage bags.
- Doormat and a cheap rug, since the floor is freezing in winter.
- Curtains, because the window faces the street light.

My own items:
- Table lamp for late-night study, so I do not keep Ali awake with the main light.
- Warm blanket and one extra pillow.
- Hangers, about 15.
- Small mirror for the wall.
- Plastic storage box to keep snacks safe from the hostel mice.
- Water bottle and two mugs.

Nice to have, if money is left:
- Small whiteboard for writing deadlines and the class timetable.
- Fairy lights. Ali says it is unnecessary, but I think the room will feel less like a jail.

Budget: around 12,000 for my items and about 8,000 for the shared items, so about 4,000 is my share of that.

Shopping plan: go to the Sunday bazaar first for the rug, hangers, dustbin and storage box, because they are much cheaper there. Buy the kettle and the extension board from a proper electronics shop, because cheap electrical things are dangerous. Check that the kettle has an automatic switch-off. Keep all the receipts so Ali and I can settle the shared amount fairly at the end.`,
  },
  {
    id: 20,
    title: "Idea: study group reminder bot",
    tag: "Ideas",
    date: "2026-11-07",
    content: `Our class WhatsApp group has more than 60 people, and important messages about quizzes and deadlines get lost under hundreds of memes and "anyone has the slides?" messages. Twice this semester people missed a quiz because the announcement got buried. This could be solved with a very simple tool.

The idea: a small web page where the class representative adds deadlines (quizzes, assignments, presentations), and every student can see them sorted by date, with the closest one at the top.

Version 1 (very simple, no login):
- A list of upcoming deadlines with the course name, title, date and a short note.
- A colour for each course so the list is easy to scan.
- A filter by course, so I can see only Web Programming deadlines.
- A "days left" label like "3 days left", which turns red when it is one day or less.

Version 2 (if version 1 is actually used):
- Students can mark a deadline as "done" for themselves.
- A weekly summary every Sunday night of what is coming that week.
- An export to Google Calendar.

Why it might work: it is only useful if people actually open it, so it must be faster than scrolling the WhatsApp group. One link in the group description, opening straight to the list, no sign-up.

Tech: Next.js with simple mock data at first, exactly like our Notes app assignment. Later a small database if the class really uses it.

Next steps:
1. Ask the CR if she would be willing to update it.
2. Sketch the screen on paper during the holidays.
3. Build version 1 in one weekend after the exams.

Funny thought: this is basically our Notes app with dates instead of notes.`,
  },
];
