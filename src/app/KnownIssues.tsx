import CollapsibleSection from "@/components/CollapsibleSection";

const KnownIssues = () => {
  return (
    <section className="grid w-full gap-3 p-3">
      <CollapsibleSection title="Known Issues">
        <ol className="flex flex-col gap-3 list-decimal ml-6">
          <li>
            When you control a sim who is a Stay Over Guest, they are treated as if they
            are vacationing on a residential lot belonging to another Household. You may
            see some interactions that normally appear during vacations, such as &quot;Go
            To Lodging&quot;.
          </li>
          <li>
            When a sim is on vacation or is part of a Stay Over group and decides to visit
            a different area from where they are staying, the &apos;Go To Lodging&apos;
            interaction icon will never disappear from the Sim&apos;s portrait in the
            skewer. This is a bug present in the unmodified game.
          </li>
          <li>
            <p className="line-through">
              When you add a sim to the Skewer who is already in the area, the information
              in the Aspiration and Skills Panels might not appear immediately. These
              panels will remain empty until the sim completes their current animation.
              The Skills Panel will update automatically, but for the Aspiration Panel,
              you’ll need to switch to another Sim to refresh the UI. Keep in mind that
              this is only a visual glitch.
            </p>
            <p className="text-green-400">
              Partially fixed. When adding a sim present in the area to the skewer, a
              custom interaction will be pushed to the sim’s interaction queue, forcing
              the UI to reload after two minutes in the game. It should be compatible with
              almost all interactions and prevent their cancellation.
            </p>
          </li>
          <li>
            <p className="line-through">
              When controlling a selectable sim added by this mod within their home lot,
              you may notice interactions that should not be available between household
              members. For instance, the 'Ask to Be New Roommate' interaction might
              appear.
            </p>
            <p className="text-green-400 italic">
              Fixed. The ‘Ask to be New Roommate’ interaction now verifies that the
              participating Sims do not belong to the same household. Please report if
              there is another interaction with this behavior.
            </p>
          </li>
          <li>
            <p className="line-through">
              If one or more selectable Sims are added using this mod and a member of the
              active household dies, leaving no remaining Sims in the household, multiple
              issues and exceptions may occur. To prevent this, avoid such scenarios
              entirely. Additionally, do not attempt to save the game if this situation
              arises.
            </p>
            <p className="text-green-400 italic">Fixed.</p>
          </li>
          <li>
            <p className="line-through">
              Unexpected behaviors may occur when adopting a child while using an added
              selectable NPC.
            </p>
            <p className="text-green-400 italic">
              No significant issues were detected when adopting a child while using an
              added selectable NPC. If you notice any unexpected behavior, please feel
              free to report it.
            </p>
          </li>
          <li>
            When adopting a pet while controlling a Sim from another household, the pet
            will be added to the active household, not the household of the controlled
            Sim. For example, if you are playing with Household A and control a Sim from
            Household B while they are at home, adopting a cat will result in the cat
            being added to Household A. The potential errors this may cause are currently
            unclear, so it is strongly recommended to avoid saving the game until you have
            confirmed that no additional issues have arisen.
            <br />
            <i className="text-yellow-400">It requires further testing and reports.</i>
          </li>
          <li>
            Some users have reported that this mod may cause the follow cam to stop
            working unexpectedly. I'm currently looking into this issue and appreciate
            your patience as I work towards a resolution.
            <br />
            <i className="text-yellow-400">It requires further testing and reports.</i>
          </li>
        </ol>
      </CollapsibleSection>
    </section>
  );
};

export default KnownIssues;
