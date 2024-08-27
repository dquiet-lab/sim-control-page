import CollapsibleSection from "@/components/CollapsibleSection";

const Interactions = () => {
  return (
    <section className="grid w-full gap-3 p-3">
      <CollapsibleSection title="List of Interactions">
        <ul className="flex flex-col gap-3 list-disc ml-6">
          <li>
            <h3 className="font-semibold">Add selectable sims</h3>
            <p>
              Add a selectable Sim to the Skewer. It will be added to the
              default situation of a playable sim brought to the zone with the
              ‘Bring Here’ interaction. For example, if the lot is a café, the
              Sim will be added to the situation{" "}
              <i>"situation_Cafe_GenericCustomer"</i>.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Remove Selectable Sim</h3>
            <p>
              Remove a selectable sim from the Skewer. What happens next depends
              on the situation the Sim is in:
            </p>
            <p>
              If the Sim is part of a specific situation (e.g., a hired
              mixologist), they will return to their previous situation without
              significant changes.
            </p>
            <p>
              If the Sim is not part of any situation and is within the active
              lot zone, they will be added to the default situation of that
              zone. Conversely, if the Sim is outside the lot, they will return
              home after a few minutes.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Clear All Selectable Sims</h3>
            <p>Remove all selectable sims added to the Skewer by this mod.</p>
          </li>
          <li>
            <h3 className="font-semibold">
              Show in Cheat Menu / Show in Pie Menu
            </h3>
            <p>
              Allows hiding this mod in the Pie Menu or Cheat Menu (you must
              activate the ‘testingcheats on’ command and access it by Shift +
              Clicking on any Sim).
            </p>
          </li>
          <li>
            <h3 className="font-semibold">
              Show in Relationship Panel / Don&apos;t show in the Relationship
              Panel
            </h3>
            <p>
              These interactions allow enabling or disabling the use of this mod
              within the relationship panel by clicking on any sim. By default,
              this feature is enabled.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Start a Stay Over</h3>
            <p>
              Create an indefinite-duration ‘Stay Over.’ It can only be used
              when you are in the residence of the active household (i.e., the
              household you selected to play).
            </p>
          </li>
          <li>
            <h3 className="font-semibold">End this sim&apos;s Travel Group</h3>
            <p>
              Ends the ‘Stay Over’ or vacation group that this Sim is part of.
              All group members will be released.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Add to Travel Group</h3>
            <p>
              If the active household has a ‘Stay Over’ group in their home lot,
              the target sim will be added to it. If no ‘Stay Over’ group
              exists, the target sim will be added to the Travel Group of the
              active selectable sim.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">
              Remove from their current Travel Group
            </h3>
            <p>
              Remove the Sim from their ‘Stay Over’ or vacation group. If the
              group becomes empty, it will be automatically destroyed.
            </p>
          </li>
        </ul>
      </CollapsibleSection>
    </section>
  );
};
export default Interactions;
