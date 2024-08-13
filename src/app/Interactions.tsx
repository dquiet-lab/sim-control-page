const Interactions = () => {
  return (
    <section className="grid w-full gap-3 p-3">
      <h2 className="text-3xl font-bold">List of interactions</h2>
      <ul className="flex flex-col gap-3 list-disc ml-6">
        <li>
          <h3 className="font-semibold">Add selectable sims</h3>
          <p>
            Empower your puppetry skills! With this mod interaction, you can
            pluck a sim from the crowd and take control like a master
            marionettist. It’s like having your own little Sims-shaped joystick!
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Remove Selectable Sim</h3>
          <p>
            Remove a selectable sim from the skewer. Now, what happens next
            depends on their life choices: <br />
            If the Sim isn’t part of any situations and is inside the lot, they
            get a special invite: “Welcome to the Hangout Hour!” Yep, they’ll
            behave like a Sim you’ve casually invited over. Think casual chats,
            friendly banter, and maybe a dance move or two. All within a neat
            2-hour window. <br />
            If our adventurous Sim was beyond the lot boundaries, fear not!
            They’ll gracefully exit stage left and return to their humble abode.
            It’s like they realized they left the stove on at home—off they go!{" "}
            <br />
            And finally, if the Sim has a running situation: Ah, the working
            Sims—the hustlers, the mixologists, the freelance painters. They’ve
            got gigs! For them, it’s back to business. They’ll resume their
            original state—whether it’s shaking cocktails, painting
            masterpieces, or fixing plumbing. It’s like they never left their
            shift at the local bar
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Clear all selectable Sim</h3>
          <p>
            Use this interaction to whisk away any selectable sims that our mod
            has sprinkled into the mix. It’s like tidying up your sim
            universe—no more lingering extras stealing the spotlight!
          </p>
        </li>
        <li>
          <h3 className="font-semibold">
            Show in cheat menu / Show in pie menu
          </h3>
          <p>
            Master the art of clandestine modding! Hide this mod in the cheat
            menu, accessible only to those who’ve activated testingcheats. Once
            you’ve donned your secret developer cape, perform a stealthy Shift +
            Click on a sim to reveal its hidden powers. It’s like unlocking the
            Sim Matrix.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">
            Show in Relationship Panel / Don&apos;t show in the Relationship
            Panel
          </h3>
          <p>
            By default, simply click on a sim in the Relationship Panel to
            reveal the hidden powers of this mod. It’s like discovering the
            cheat code for your sim’s life. And hey, if you prefer a more
            incognito experience, you can always disable this feature—because
            even mods deserve their privacy!
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Start a Stay Over</h3>
          <p>
            Use this magical interaction, and voilà! Your Sim settles in for an
            indefinite stay over at the active household’s residence. No
            check-out date, no rush—just pure relaxation. It’s like they’ve
            moved in with their besties, complete with secret midnight chats and
            shared dreams. <br />
            But here’s the twist: You’re the puppet master! The stay only ends
            when you decide. Maybe it’s a weekend getaway, or perhaps they’re
            settling in for a Sims-century. Your call!.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">End this sim&apos;s Travel Group</h3>
          <p>
            Imagine you’re the Sim whisperer—the one who steps in when Travel
            Groups get a little too cozy. Click that button, and bam! The
            existing Travel Group in the target Sim’s household gets disbanded.
            <br />
            It’s like telling Sims, “Okay, party’s over—everyone back to their
            own corners!”
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Add to Travel Group</h3>
          <p>
            If there is a Stay Over Group already present in the active
            household’s residential area, the target Sim will be added to that
            group. Essentially, they’ll become part of the cozy stay-over crew.
            Picture it: Sims sharing late-night stories and raiding the fridge
            together—what a delightful scene!.
            <br />
            However, if there are no existing Stay Over groups in the active
            household’s residence, fear not! The target Sim will instead join
            the Travel Group of the Sim who initiated the interaction. It’s like
            they’re saying, “Hey, I’m ready for an adventure! Sign me up for
            that Travel Group!”
          </p>
        </li>
        <li>
          <h3 className="font-semibold">
            Remove from their current Travel Group
          </h3>
          <p>
            The target Sim is plucked out of their current Travel Group. magine
            them waving goodbye to their group, saying, “I’m off to explore solo
            adventures!”. If the Travel Group suddenly finds itself without any
            members—cue the tumbleweeds—it disbands automatically.
          </p>
        </li>
      </ul>
      <p className="text-center italic p-2">
        Ah, the intricate social dynamics of Sim life—it’s like managing a
        quirky little universe, isn’t it?
      </p>
    </section>
  );
};
export default Interactions;
