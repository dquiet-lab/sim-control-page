import HorizontalRule from "@/components/HorizontalRule";
import Link from "next/link";
import TechnicalDetails from "./TechnicalDetails";
import Interactions from "./Interactions";

export default function Home() {
  return (
    <main className="w-full flex flex-col max-w-6xl m-auto">
      {/* Introduction */}
      <section className="grid justify-center w-full gap-3 px-3 pb-3">
        <p>
          This mod for The Sims 4 allows you to take control of any sim in the
          game, offering unprecedented flexibility and creativity in your
          gameplay.
        </p>
        <Link
          href="#downloads"
          replace
          className="m-auto w-64 p-3 bg-primary font-semibold rounded-lg text-center hover:bg-primary/50"
        >
          Go to Download Links
        </Link>
      </section>

      {/* Mod features */}
      <section className="grid w-full gap-3 p-3">
        <h2 className="text-3xl font-bold">Mod Features</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">Play as any sim</h3>
            <p>
              Seamlessly switch control between your active household sims and
              any other sim in the game world.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Easy-to-Use Interface</h3>
            <p>Integrated into the game&apos;s pie menu for intuitive use.</p>
          </li>
          <li>
            <h3 className="font-semibold">Customizable menus</h3>
            <p>
              You can hide this mod in the Shift + Click menu or access it via
              the Relationship Panel
            </p>
          </li>
        </ul>
      </section>
      <HorizontalRule />

      {/* How it works */}
      <section className="grid w-full gap-3 p-3">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">Installation</h3>
            <p>
              Simply download the mod, place it in your mods folder, and enable
              script mods in your game settings.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Activation</h3>
            <p>
              Click on any non-playable Sim and select the new &quot;Add to
              Selectable Sims&quot; option from the Sim Control Manager category
              in the pie menu.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Gameplay</h3>
            <p>
              Once added, the sim is fully controllable, allowing you to direct
              their actions, change their outfits, manage their needs, assist to
              their career, and all the things that you want.
            </p>
          </li>
        </ul>
      </section>
      <HorizontalRule />

      {/* Benefits */}
      <section className="grid w-full gap-3 p-3">
        <h2 className="text-3xl font-bold">Benefits</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">Enhanced Gameplay</h3>
            <p>
              Experience the game from new perspectives by controlling different
              sims and situations.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Storytelling</h3>
            <p>
              Create intricate storylines by directly influencing the actions
              and decisions of all sims.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Flexibility</h3>
            <p>
              Perfect for managing multiple households or intricate social
              dynamics within your game.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Lightweight</h3>
            <p>
              This mod does not add buffs, traits, or affordances to any Sim.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Very Fast</h3>
            <p>
              Uses custom interactions and cached tests to prevent delays in
              loading the pie menu.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Safe to remove</h3>
            <p>
              You can remove this mod at any time without leaving any trace.
            </p>
          </li>
        </ul>
      </section>
      <HorizontalRule />

      {/* Interactions */}
      <Interactions />
      <HorizontalRule />

      {/* Demo */}
      <section className="grid w-full gap-3 p-3">
        <h2 className="text-3xl font-bold">Demo</h2>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/Ov_-kwuLC04"
          className="w-full h-auto aspect-video"
        ></iframe>
      </section>
      <HorizontalRule />

      {/* Technical Details */}
      <TechnicalDetails />
      <HorizontalRule />

      {/* Issues */}
      <section className="grid w-full gap-3 p-3">
        <h2 className="text-3xl font-bold">Known Issues</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            When you control a Sim who is a Stay Over Guest, they are treated as
            if they are vacationing on a residential lot belonging to another
            Household. You may see some interactions that normally appear during
            vacations, such as &quot;Go To Lodging&quot;.
          </li>
          <li>
            When a Sim is on vacation or is part of a Stay Over group and
            decides to visit a different area from where they are staying, the
            &apos;Go To Lodging&apos; interaction icon will never disappear from
            the Sim&apos;s portrait in the skewer. This is a bug present in the
            unmodified game.
          </li>
          <li>
            When you control non-playable sims within the lot where they live,
            interactions that should not be available between members of the
            same household may appear. An example is &quot;Ask to be New
            Roommate&quot;.&nbsp;
            <span className="text-green-600">Fix in progress.</span>
          </li>
          <li>
            When controlling a sim from another Household, they can use
            interactions that shouldn&apos;t be available outside the lot where
            they live. An example of this is the mobile phone interactions for
            adopting a pet or a child.&nbsp;
            <span className="text-green-600">Fix in progress.</span>
          </li>
          <li>
            No major issues were detected when using a Sim from another
            Household and they decide to adopt a child. If a baby is adopted
            outside the home, they will appear on the lot, and the parent
            won&apos;t be able to use the interaction to return home. Everything
            should be resolved by leaving the area, but more testing is needed
            to ensure it doesn&apos;t cause future problems.&nbsp;
            <span className="text-yellow-700">
              It requires further investigation.
            </span>
          </li>
          <li>
            When adopting a pet while controlling a Sim from another Household,
            the pet will be added to the active Household, not the Household of
            the controlled Sim. For example, if you are playing with Household A
            and control a Sim from Household B while they are at home, if this
            Sim adopts a cat, the cat will be added to Household A. I recommend
            not saving the game after doing this until you can confirm that
            there are no additional issues.&nbsp;
            <span className="text-yellow-700">
              It requires further investigation.
            </span>
          </li>
        </ul>
      </section>
      <HorizontalRule />

      {/* Acknowledgments  */}
      <section className="grid w-full gap-3 p-3">
        <h2 className="text-3xl font-bold">Acknowledgments</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">
              <a href="https://github.com/TitanNano/TS4ControlAnySim">
                Control Any Sim
              </a>
              &nbsp;by <a href="https://github.com/TitanNano">TitanNano</a>
            </h3>
            <p>
              I took a lot of inspiration from their mod. Unfortunately, the
              author had been inactive for a long time and did not update their
              mod. This is why I started developing my own version that is free
              of issues. I am really grateful, as their repository helped me see
              where to start. <br />
              Sim Control Hub shares some functions with Control Any Sim but
              takes a more in-depth and complex approach. I had to start from
              scratch to ensure that the Sims managed by this mod have
              absolutely all the features of a playable Sim, which has
              significantly increased the complexity of this mod.
              <br />
              Recently, the author became active again and updated their mod; I
              recommend checking it out and trying it:
              <br />
              <a
                href="https://github.com/TitanNano/TS4ControlAnySim"
                className="font-semibold text-blue-500 hover:text-blue-200"
              >
                TS4ControlAnySim on GitHub
              </a>
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Creator Musings</h3>
            <p>
              I am very grateful to the Creator Musings community on Discord.
              All the members are amazing and willing to help with anything.
              They guided me in solving various problems I encountered while
              developing this mod.
              <br />
              <a
                href="https://discordbotlist.com/servers/creator-musings-605863047654801428"
                className="font-semibold text-blue-500 hover:text-blue-200"
              >
                Creator Musing
              </a>
            </p>
          </li>
        </ul>
      </section>
      <HorizontalRule />

      {/* Downloads */}
      <section className="grid w-full gap-3 p-3" id="downloads">
        <h2 className="text-3xl font-bold">Download Links</h2>
        <p>Coming soon...</p>
      </section>
    </main>
  );
}
