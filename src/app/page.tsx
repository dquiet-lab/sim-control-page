import HorizontalRule from "@/components/HorizontalRule";
import TechnicalDetails from "./TechnicalDetails";
import Interactions from "./Interactions";
import KnownIssues from "./KnownIssues";
import CollapsibleSection from "@/components/CollapsibleSection";
import ReleaseNotes from "./ReleaseNotes";

export default function Home() {
  return (
    <main className="w-full flex flex-col max-w-6xl m-auto">
      {/* Introduction */}
      <section className="grid justify-center w-full gap-5 px-3 pb-3">
        <p>
          This mod for The Sims 4 allows you to take control of any sim in the game,
          offering unprecedented flexibility and creativity in your gameplay.
        </p>
      </section>

      {/* Mod features */}
      <section className="grid w-full gap-3 px-3 py-6">
        <h2 className="text-3xl font-bold">Mod Features</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">Play as any sim</h3>
            <p>
              Seamlessly switch control between your active household sims and any other
              sim in the game world.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Easy-to-Use Interface</h3>
            <p>Integrated into the game&apos;s pie menu for intuitive use.</p>
          </li>
          <li>
            <h3 className="font-semibold">Customizable menus</h3>
            <p>
              You can hide this mod in the Shift + Click menu or access it via the
              Relationship Panel
            </p>
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section className="grid w-full gap-3 px-3 py-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">Installation</h3>
            <p>
              Simply download the mod, place it in your mods folder, and enable script
              mods in your game settings.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Activation</h3>
            <p>
              Click on any non-playable sim and select the new &quot;Add to Selectable
              Sims&quot; option from the <i>Actions {">"} Sim Control Hub category</i> in
              the pie menu.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Gameplay</h3>
            <p>
              Once added, the sim becomes fully controllable, allowing you to direct their
              actions, change their outfits, manage their needs, send them to work, and
              perform all functions available to a playable sim.
            </p>
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="grid w-full gap-3 px-3 py-6">
        <h2 className="text-3xl font-bold">Benefits</h2>
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">Enhanced Gameplay</h3>
            <p>
              Experience the game from new perspectives by controlling different sims and
              situations.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Storytelling</h3>
            <p>
              Create intricate storylines by directly influencing the actions and
              decisions of all sims.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Flexibility</h3>
            <p>
              Perfect for managing multiple households or intricate social dynamics within
              your game.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Lightweight</h3>
            <p>This mod does not add buffs, traits, or affordances to any sim.</p>
          </li>
          <li>
            <h3 className="font-semibold">Fast</h3>
            <p>
              Utilize custom interactions and cached tests to prevent delays when loading
              the pie menu.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Safe to remove</h3>
            <p>You can remove this mod at any time without leaving any trace.</p>
          </li>
        </ul>
      </section>

      {/* Demo */}
      <section className="grid w-full gap-3 px-3 py-6">
        <h2 className="text-3xl font-bold">Demo</h2>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/Ov_-kwuLC04"
          className="w-full h-auto aspect-video"
        ></iframe>
      </section>
      <HorizontalRule />

      {/* Interactions */}
      <Interactions />

      {/* Technical Details */}
      <TechnicalDetails />

      {/* Issues */}
      <KnownIssues />

      {/* Acknowledgments  */}
      <section className="grid w-full gap-3 p-3">
        <CollapsibleSection title="Acknowledgments">
          <ul className="flex flex-col gap-3 list-disc ml-6">
            <li>
              <h3 className="font-semibold">
                <a
                  href="https://modthesims.info/d/634595/control-any-sim-v1-2-6.html"
                  className="link"
                >
                  Control Any Sim
                </a>
                &nbsp;by{" "}
                <a href="https://github.com/TitanNano" className="link">
                  TitanNano
                </a>
              </h3>
              <p>
                I took inspiration from this mod. Since the author hadn’t updated it for a
                long time, I started developing my own version from scratch. Recently,
                this mod received some updates, so I recommend downloading and trying it
                out.
              </p>
              <p>
                Sim Control Hub shares some functions with Control Any Sim; however, I
                decided to take a deeper approach, treating the added non-playable sims as
                players and retaining all their functionalities. This results in greater
                complexity in the source code and an increase in the number of injections
                needed in the game.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">
                <a
                  href="https://discordbotlist.com/servers/creator-musings-605863047654801428"
                  className="link"
                >
                  Creator Musings
                </a>{" "}
              </h3>
              <p>
                I am very grateful to the Creator Musings community on Discord. All the
                members are amazing and willing to help with anything. They guided me in
                solving various problems I encountered while developing this mod.
                <br />
              </p>
            </li>
            <li>
              <h3 className="font-semibold">
                <a href="https://luniversims.fr/profile/44799-heidi137/" className="link">
                  heidi137 - luniversims.fr
                </a>{" "}
              </h3>
              <p>Acknowledgment for the French translation of the mod. Thank you.</p>
            </li>
          </ul>
        </CollapsibleSection>
      </section>

      {/* Release Notes */}
      <ReleaseNotes />

      <HorizontalRule />

      {/* Downloads */}
      <section className="grid w-full gap-3 px-3 py-5 justify-center" id="downloads">
        <h2 className="text-3xl font-bold text-center">Download Latest</h2>
        <a
          href="https://www.mediafire.com/file/xuqcndp1gjichaw/DQuiet_SimControlHub_V1.2.0.zip/file"
          className="font-semibold hover:shadow-lg p-3 bg-primary rounded-xl text-center"
        >
          Sim Control Hub V1.2.0 - MediaFire
        </a>
        <a
          href="https://www.curseforge.com/sims4/mods/sim-control-hub"
          className="font-semibold hover:shadow-lg p-3 w-ming bg-black text-white rounded-xl text-center border-white"
        >
          View on CurseForge
        </a>
        <a
          href="https://modthesims.info/download.php?t=686467"
          className="font-semibold hover:shadow-lg p-3 w-ming bg-gray-700 text-white rounded-xl text-center border-white"
          aria-disabled
        >
          View on Mod The Sims
        </a>
      </section>
    </main>
  );
}
