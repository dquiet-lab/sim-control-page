import CollapsibleSection from "@/components/CollapsibleSection";

const TechnicalDetails = () => {
  return (
    <section className="grid w-full gap-3 p-3 ">
      <CollapsibleSection title="Technical Details">
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold">How it works</h3>
          <p>
            This mod operates exclusively during simulation time. It retrieves
            the previous state and configuration from a JSON file generated by
            the mod while the zone is active, eliminating the need to alter your
            save file. When you exit a zone, any modifications made by the mod
            are automatically undone, restoring the original state.
          </p>
          <p>
            You can safely keep this mod in your mod folder, even if you don’t
            actively use it. It won’t introduce any delays to the pie menu or
            affect other aspects of the game. As long as you refrain from adding
            any sims to the Skewer, the game will function as if no mod were
            installed.
          </p>
          <h3 className="text-lg font-semibold">Selectable Sims</h3>
          <p>
            When you start a game in The Sims 4, your first crucial decision is
            selecting a household to dive into. Behind the scenes, the game
            populates a list known as ‘Selectable Sims,’ which determines which
            Sims can be chosen via the portraits displayed at the bottom of the
            screen (referred to as the Skewer).
          </p>
          <p>
            Sim Control Hub provides the capability to augment this list by
            incorporating Sims from other households. Achieving this involves
            making modifications to various aspects of the game, which is why
            the majority of functionalities within this mod are implemented
            using Python scripts.
          </p>
          <h3 className="text-lg font-semibold">Situations</h3>
          <p>
            When you add a new selectable Sim who is present in the active zone,
            they are likely engaged in a specific situation. This could range
            from a casual ‘WalkBy’ scenario to a hired mixologist tending the
            bar, someone leisurely fishing by the pond, and so on. These
            situations can vary from one zone to another, making it more
            challenging to control a Sim since they directly influence their
            autonomy.
          </p>
          <p>
            A straightforward approach would be to limit control to sims in
            ‘WalkBy’ or generic situations. However, I chose to take a risk and
            allow control over any sim. This means you can take control of a
            store vendor, Father Winter himself, or any other sim. Initially,
            managing these Sims doesn’t pose significant issues. As long as you
            position them near the relevant areas where they naturally perform
            their tasks, they will continue to do so automatically.
          </p>
          <p>
            However, it’s important to remember that there are many different
            situations to consider. I would greatly appreciate any reports of
            issues that arise from controlling sims in specific situations, as
            unexpected glitches can occur.
          </p>
          <h3 className="text-lg font-semibold">Leaving Situations</h3>
          <p>
            In the game, all situations progress through distinct states.
            However, when most situations conclude, they transition into a
            ‘Leave State,’ during which each participating Sim assumes a
            ‘Leaving’ role. This role can cause an issue where selectable sims
            added to the Skewer by this mod may become trapped in an endless
            loop, attempting to leave the area but remaining unable to do so.
            You can easily spot this when you see a sim standing still,
            endlessly restarting an idle animation.
          </p>
          <p>
            Interestingly, even in the unmodified game, some situations exhibit
            this bugged animation. For instance, during the ‘Welcome Wagon’
            event, neighborhood sims waiting for an invitation to enter may
            become trapped in this odd animation. This happens because they
            repeatedly attempt the ‘Go to front door’ interaction until they are
            finally invited into the residence.
          </p>
          <p>
            Fortunately, I’ve developed a solution: my mod actively monitors
            changes in the situation’s state for any selectable sim added by
            this mod and promptly removes any situations that assume a ‘Leaving’
            role.
          </p>
          <p>
            If you encounter any stuck sims, here’s a quick fix: send them back
            home and then bring them back to the current zone. This should
            resolve any potential issues. Additionally, if you do experience
            this bug, please take note of the steps that led to it and report
            them. While I’m confident this fix will prevent the problem, it’s
            always good to be cautious.
          </p>
          <h3 className="text-lg font-semibold">Homeless Sims</h3>
          <p>
            Adding homeless selectable Sims to the Skewer was a significant
            challenge, but it’s now possible.
          </p>
          <p>
            In the unmodified game, when you are playing in a different area
            from the active household’s home lot, any selectable Sim at home
            automatically heads to work. However, selectable Sims who are not at
            home and need to go to work must first return to their home lot.
          </p>
          <p>
            An issue arises with homeless sims; since they lack a home,
            exceptions occur. To address this, my mod introduces a small patch
            that allows homeless sims to enter a null zone and engage in any
            Rabbit Hole activity that typically requires a home lot. I’ve
            thoroughly tested this feature, and there shouldn’t be any issues
            related to it.
          </p>
          <h3 className="text-lg font-semibold">Travel Groups</h3>
          <p>
            I’ve added a small module with interactions specifically for
            handling Travel Groups. I did this because Travel Groups can cause
            quite a few issues, especially since the base game wasn’t originally
            designed to control sims from different households and travel
            groups.
          </p>
          <p>Here’s a breakdown of how Travel Groups work:</p>
          <ol className="list-disc ml-5">
            <li>
              <h3 className="font-semibold">Types:</h3>
              <ul className="ml-5">
                <li>
                  Vacation Groups: These are formed when a sim uses the “Take a
                  Vacation” interaction. This creates a Travel Group consisting
                  of all sims currently on vacation in another region. The Sim
                  who initiated the vacation becomes the group leader.
                </li>
                <li>
                  Stay Over Groups: Introduced with the “Growing Together” DLC,
                  these groups are created when Sims are invited to stay
                  overnight at the active household’s residence. Notably, the
                  Sims from the active household do not become part of this
                  Travel Group.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Constraints:</h3>
              <ul className="list-disc ml-5">
                <li>
                  In the base game, each household can have only one Travel
                  Group. If a sim from the active household is on vacation,
                  there cannot be any Stay Over guests. Conversely, if there are
                  Stay Over guests, no sims from the active household can be
                  vacationing in another region.
                </li>
                <li>
                  When a sim is vacationing in another region, you’ll notice
                  that you cannot select sims who are not part of their Travel
                  Group—unless you invite them using the “Join Vacation”
                  interaction.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            When you consider it carefully, this introduces significant
            complexity to the mod, as it must evaluate numerous scenarios. Here
            are some examples:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Controlling a sim who is a stay-over guest in the active household
              (where the active household itself is not part of the Travel
              Group).
            </li>
            <li>
              Controlling two sims from different households, both of whom are
              stay-over guests in other households.
            </li>
            <li>
              Controlling sims from different Travel Groups who happen to be
              vacationing in the same region.
            </li>
          </ul>
          <p>
            Fortunately, I’ve thoroughly considered all possible scenarios, so
            there shouldn’t be any issues. Additionally, identifying glitches
            related to Travel Groups is straightforward: If a Sim that should be
            controllable cannot be selected, they’ll appear grayed out, and you
            won’t be able to view their needs, relationships, and other relevant
            information.{" "}
            <span className="text-red-300">
              If you encounter this situation, please submit a report with the
              steps to reproduce it.
            </span>
          </p>
          <h3 className="text-lg font-semibold">Error Logging</h3>
          <p>
            This mod includes a logger designed to record potential errors that
            might occur. If you suspect something isn’t working correctly, check
            the folder where you’ve stored the mod. Look for a file named
            `dquiet_sim_control_hub.log`—it should contain information about any
            errors encountered. If you find this file, feel free to share its
            contents with me, and I’ll investigate to determine what might be
            going wrong.
          </p>
        </div>
      </CollapsibleSection>
    </section>
  );
};
export default TechnicalDetails;
