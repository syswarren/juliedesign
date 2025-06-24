export interface UpdateData {
  id: string;
  title: string;
  subtitle: string;
  content: (string | { type: 'image'; src: string; alt?: string })[];
  date: string;
}

export const updateData: UpdateData = {
  "id": "17012025",
  "title": "Design systems at the wrong time are a trap",
  "subtitle": "Why early-stage startups should focus on shipping, not systematizing",
  "content": [
    "The past few months, I’ve helped a few early-stage startups get their product off the ground.2 or 3 engineers, no designer yet, just a vague idea of what needs to exist.Half the time, the teams come from big tech. Strong resumes. Strong pitch decks. Strong opinions.And one request always shows up:“Julie, where’s the design system?”Or worse: “I can’t work because Julie hasn’t finished the design system.”(Oh, poor baby.)A design system feels smart. Scalable. Efficient.But when you don’t even have a product, it’s none of those things.Design systems are great when you’re shipping variations of the same thing, over and over.Not when every screen is a question and every feature is a maybe.Early on, you don’t need tokens or components. You need speed, conviction, and a willingness to throw stuff out.And if I hand over tokens on day one, they’ll be irrelevant by Friday. Don’t ask me how I know.Systematizing too early slows you down. You end up designing constraints instead of answers—trying to scale a product that doesn’t even exist yet.So no, I don’t build design systems first.I build the product. I give you just enough structure to move.First, ship. Then systemize."
  ],
  "date": "2025-01-17"
};
