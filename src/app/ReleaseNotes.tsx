import CollapsibleSection from "@/components/CollapsibleSection";

const ReleaseNotes = () => {
  return (
    <section className="grid w-full gap-3 p-3">
      <CollapsibleSection title="Download Links / Release Notes">
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3>
              V1.0.0 - 08-27-2024 -{" "}
              <a
                href="https://www.mediafire.com/file/pzy79qvrbceggd4/sim_control_hub_v1.0.0.zip/file"
                className="link font-semibold"
              >
                Download
              </a>
            </h3>
            <p>First release</p>
          </li>
          <li>
            <h3>
              V1.1-beta.1 - 08-28-2024 -{" "}
              <a
                href="https://www.mediafire.com/file/bi7upnhbbvbkzah/sim_control_hub_v1.1-beta.1.zip/file"
                className="link font-semibold"
              >
                Download
              </a>
            </h3>
            <p>
              The ability to add Dogs, Cats, and Horses to the list of
              selectable Sims has been added.
              <br />
              They can be controlled using the cheat code
              <i> 'pets.toggle_selectable_pets'</i>. This command can be enabled
              using&nbsp;
              <a
                href="https://www.patreon.com/posts/cheat-fix-for-22697405"
                className="link"
              >
                TwistedMexi’s All Cheats
              </a>
              &nbsp;or&nbsp;
              <a
                href="https://modthesims.info/d/678890/selectable-pets-always.html"
                className="link"
              >
                charitycodes Selectable Pets Always
              </a>
            </p>
          </li>
          <li>
            <h3>
              V1.1.0 - 08-30-2024 -{" "}
              <a
                href="https://www.mediafire.com/file/zerhipioldfwzmj/sim_control_hub_v1.1.0.zip/file"
                className="link font-semibold"
              >
                Download
              </a>
            </h3>
            <ul className="list-inside list-disc">
              <li>
                A problem with infinite loading screens was fixed when a
                homeless sim is the last to leave the zone using the ‘Go Home’
                interaction. This issue occurred because the game attempted to
                load the sim’s home lot. Now, when an added selectable sim
                leaves the zone, loading a new zone will be avoided, allowing
                the player to switch control to another sim
              </li>
              <li>
                A critical error that could halt the game and cause various
                exceptions was fixed when an added selectable sim attended their
                career and the player decided to change zones. This issue
                occurred because the AwayActionTracker was not properly stopped,
                causing the career scheduler to attempt to access unavailable
                information.
              </li>
              <li>
                A problem was fixed where sims performing important tasks in the
                zone would abandon them to attend their careers. Now, when it’s
                time for their career to start, the workday will be skipped
                without any performance loss, allowing the sim to complete any
                pending tasks in the zone
              </li>
              <li>
                When a selectable sim present in the zone is added during work
                hours, the workday will be skipped without any performance loss.
              </li>
              <li>
                When a selectable sim who is not present in the zone is added
                during work hours, they will automatically attend their career,
                making up for the lost work hours. Consequently, they will not
                incur any performance or money penalties.
              </li>
              <li>
                There are certain generic careers intended solely for NPCs or
                homeless sims, such as variations of Nanny, Barista, and Stall
                Vendor. These careers previously caused issues that prevented
                these sims from performing their tasks correctly in the active
                zone when they were added as selectable sims, as they had to
                attend these careers. Now, these careers will be ignored, and
                when it’s time for them to start, they will be automatically
                canceled without any penalties. An example of this is the Live
                in Services mod by LittleMsSam. The hired NPCs could not be
                controlled properly as they would attend their career, entering
                a Rabbit Hole from which they could not exit.
              </li>
              <li>Several minor bugs were fixed.</li>
            </ul>
          </li>
        </ul>
      </CollapsibleSection>
    </section>
  );
};
export default ReleaseNotes;
