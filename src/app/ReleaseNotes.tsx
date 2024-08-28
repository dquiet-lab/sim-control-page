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
            </p>
            <p>
              They can be controlled using the cheat code
              <i> 'pets.toggle_selectable_pets'</i>. This command can be enabled
              using{" "}
              <a
                href="https://www.patreon.com/posts/cheat-fix-for-22697405"
                className="link"
              >
                TwistedMexi’s All Cheats
              </a>
              &nbsp; mod.
            </p>
            <p>
              To enter Cheat Codes in The Sims 4, you must first open the Cheat
              Console by pressing “Ctrl + Shift + C” on your PC or Mac, while in
              game.
            </p>
          </li>
        </ul>
      </CollapsibleSection>
    </section>
  );
};
export default ReleaseNotes;
