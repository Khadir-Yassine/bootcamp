# What Makes a Component Reusable?

Course source: [Geeks Institute](https://www.geeks.institute/).
![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1774375714586_Gemini_Generated_Image_1knjcf1knjcf1knj.png)

**The Trap of Hardcoding** When you first start coding, it is tempting to build exactly what you see. If your dashboard needs a green button that says "Brew Espresso", you might write a component specifically called `<BrewEspressoButton>`.

But what happens tomorrow when you need a red button that says "Stop Machine"? If you hardcode the colors and text inside the component, you have to build a brand new one from scratch. That defeats the purpose of Component Architecture!

**The Secret Sauce: Agnosticism** A truly reusable component is "agnostic"—it doesn't know *where* it is being used or *what* exactly it is displaying until the very last second.

- It shouldn't have hardcoded text.

- It shouldn't have hardcoded colors (unless it's a strict brand rule).

- It acts like an empty template.

**AutoBarista Example:** Instead of building `<OnlineBadge>` and `<OfflineBadge>`, you build one single `<StatusBadge>` component. You tell it: *"Hey, I'm going to give you a word. If the word is 'Online', make your background green. If the word is 'Offline', make your background red."* Now, you have one piece of code doing the work of two.
