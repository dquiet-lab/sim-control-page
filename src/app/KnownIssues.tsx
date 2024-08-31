import CollapsibleSection from "@/components/CollapsibleSection";

const KnownIssues = () => {
  return (
    <section className="grid w-full gap-3 p-3">
      <CollapsibleSection title="Known Issues">
        <ol className="flex flex-col gap-3 list-decimal ml-6">
          <li>
            When you control a sim who is a Stay Over Guest, they are treated as
            if they are vacationing on a residential lot belonging to another
            Household. You may see some interactions that normally appear during
            vacations, such as &quot;Go To Lodging&quot;.
          </li>
          <li>
            When a sim is on vacation or is part of a Stay Over group and
            decides to visit a different area from where they are staying, the
            &apos;Go To Lodging&apos; interaction icon will never disappear from
            the Sim&apos;s portrait in the skewer. This is a bug present in the
            unmodified game.
          </li>
          <li>
            <p className="line-through">
              When you add a sim to the Skewer who is already in the area, the
              information in the Aspiration and Skills Panels might not appear
              immediately. These panels will remain empty until the sim
              completes their current animation. The Skills Panel will update
              automatically, but for the Aspiration Panel, you’ll need to switch
              to another Sim to refresh the UI. Keep in mind that this is only a
              visual glitch.
            </p>
            <p className="text-green-400">
              Partially fixed. When adding a sim present in the area to the
              skewer, a custom interaction will be pushed to the sim’s
              interaction queue, forcing the UI to reload after two minutes in
              the game. It should be compatible with almost all interactions and
              prevent their cancellation.
            </p>
          </li>
          <li>
            <p className="line-through">
              When controlling a selectable sim added by this mod within their
              home lot, you may notice interactions that should not be available
              between household members. For instance, the 'Ask to Be New
              Roommate' interaction might appear.
            </p>
            <p className="text-green-400 italic">
              Fixed. The ‘Ask to be New Roommate’ interaction now verifies that
              the participating Sims do not belong to the same household. Please
              report if there is another interaction with this behavior.
            </p>
          </li>
          <li>
            <p>
              When one or more selectable Sims are added using this mod and a
              member of the active household dies, leaving no more Sims in the
              household, several problems and exceptions occur. Please avoid
              this situation at all costs, and do not attempt to save the game
              if this happens.
            </p>
            <p className="text-green-400">Fix in progress</p>
          </li>
          <li>
            No significant issues were detected when adopting a child while
            using a Sim added to the Skewer with this mod.
            <br />
            <i className="text-yellow-400">It requires further testing.</i>
          </li>
          <li>
            When adopting a pet while controlling a Sim from another Household,
            the pet will be added to the active Household, not the Household of
            the controlled Sim. For example, if you are playing with Household A
            and control a Sim from Household B while they are at home, if this
            Sim adopts a cat, the cat will be added to Household A. I’m not
            confident about the errors it might cause, so I recommend not saving
            the game until it’s confirmed that there are no additional issues.
            <br />
            <i className="text-yellow-400">
              It requires further testing and reports.
            </i>
          </li>
        </ol>
      </CollapsibleSection>
    </section>
  );
};

export default KnownIssues;
