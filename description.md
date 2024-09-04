# Control Any Sim

This mod for The Sims 4 lets you control Sims and pets from other households, enhancing flexibility and creativity in your gameplay.

## Summary

When you embark on a game in The Sims 4, your first crucial decision is selecting a Household to dive into. Behind the scenes, the game populates a list known as ‘Selectable Sims’, which determines which sims can be chosen via the portraits displayed at the bottom of the screen (referred to as the Skewer). Sim Control Hub provides the capability to augment this list by incorporating sims from other households. Achieving this involves making modifications to various aspects of the game, which is why the majority of functionalities within this mod are implemented using Python Scripts.

## Mod Features

- Play as any sim: Seamlessly switch control between your active household sims and any other sim in the game world.
- Easy-to-Use Interface: Integrated into the game's pie menu for intuitive use.
- Customizable menus: You can hide this mod in the Shift + Click menu or access it via the Relationship Panel

## How It Works

- Installation: Simply download the mod, place it in your mods folder, and enable script mods in your game settings.
- Activation: Click on any non-playable sim and select the new "Add to Selectable Sims" option from the Sim Control Manager category in the pie menu.
- Gameplay: Once added, the sim becomes fully controllable, allowing you to direct their actions, change their outfits, manage their needs, send them to work, and perform all functions available to a playable sim.

## Benefits

- Enhanced Gameplay: Experience the game from new perspectives by controlling different sims and situations.
- Storytelling: Create intricate storylines by directly influencing the actions and decisions of all sims.
- Flexibility: Perfect for managing multiple households or intricate social dynamics within your game.
- Lightweight: This mod does not add buffs, traits, or affordances to any sim.
- Fast: Utilize custom interactions and cached tests to prevent delays when loading the pie menu.
- Safe to remove: You can remove this mod at any time without leaving any trace.

## List of interactions

- **Add selectable sims:** Add a selectable Sim to the Skewer. It will be added to the default situation of a playable sim brought to the zone with the ‘Bring Here’ interaction. For example, if the lot is a café, the Sim will be added to the situation "situation_Cafe_GenericCustomer".

- **Remove Selectable Sim:**
  Remove a selectable sim from the Skewer. What happens next depends on the situation the Sim is in:

  - If the Sim is part of a specific situation (e.g., a hired mixologist), they will return to their previous role without significant changes.
  - If the Sim is not involved in any situation (i.e., does not have a role such as Stall Vendor) and is within the active lot, they will be assigned a default role based on the lot type. For example, if the lot is a cafe, the Sim will assume the role of 'Cafe Customer.' If the Sim is outside the lot, they will return home after a few minutes.

- **Clear All Selectable Sims:**
  Remove all selectable sims added to the Skewer by this mod.

- **Show in Cheat Menu / Show in Pie Menu:**
  Allows hiding this mod in the Pie Menu or Cheat Menu (you must activate the ‘testingcheats on’ command and access it by Shift + Clicking on any Sim).

- **Show in Relationship Panel / Don't show in the Relationship Panel:**
  These interactions allow enabling or disabling the use of this mod within the relationship panel by clicking on any sim. By default, this feature is enabled.

- **Start a Stay Over:**
  Create an indefinite-duration ‘Stay Over.’ It can only be used when you are in the residence of the active household (i.e., the household you selected to play).

- **End this sim's Travel Group:**
  Ends the ‘Stay Over’ or vacation group that this Sim is part of. All group members will be released.

- **Add to Travel Group:**
  If the active household has a ‘Stay Over’ group in their home lot, the target sim will be added to it. If no ‘Stay Over’ group exists, the target sim will be added to the Travel Group of the active selectable sim.

- **Remove from their current Travel Group:**
  Remove the Sim from their ‘Stay Over’ or vacation group. If the group becomes empty, it will be automatically destroyed.

## Known Issues

- When you control a sim who is a Stay Over Guest, they are treated as if they are vacationing on a residential lot belonging to another Household. You may see some interactions that normally appear during vacations, such as "Go To Lodging".

- When a sim is on vacation or is part of a Stay Over group and decides to visit a different area from where they are staying, the 'Go To Lodging' interaction icon will never disappear from the Sim's portrait in the skewer. This is a bug present in the unmodified game.

- ~~When you add a sim to the Skewer who is already in the area, the information in the Aspiration and Skills Panels might not appear immediately. These panels will remain empty until the sim completes their current animation. The Skills Panel will update automatically, but for the Aspiration Panel, you’ll need to switch to another Sim to refresh the UI. Keep in mind that this is only a visual glitch.~~  
  <font color="#5d7">Partially fixed. When adding a sim present in the area to the skewer, a custom interaction will be pushed to the sim’s interaction queue, forcing the UI to reload after two minutes in the game. It should be compatible with almost all interactions and prevent their cancellation.</font>

- ~~When controlling a selectable sim added by this mod within their home lot, you may notice interactions that should not be available between household members. For instance, the 'Ask to Be New Roommate' interaction might appear.~~  
  <font color="#5d7">The ‘Ask to be New Roommate’ interaction now verifies that the participating Sims do not belong to the same household. Roommates are fully compatible. A Sim added by this mod can ask an NPC Sim (who should not be selectable at the time of using the interaction) to be a new roommate, and they will be correctly added to the household of the Sim who initiated the interaction.</font>

- No significant issues were detected when adopting a child while using a Sim added to the Skewer with this mod.  
  <font color="#ff7">It requires further testing.</font>

- When adopting a pet while controlling a Sim from another Household, the pet will be added to the active Household, not the Household of the controlled Sim. For example, if you are playing with Household A and control a Sim from Household B while they are at home, if this Sim adopts a cat, the cat will be added to Household A. I’m not confident about the errors it might cause, so I recommend not saving the game until it’s confirmed that there are no additional issues.  
  <font color="#ff7">It requires further investigation and reports.</font>

## [Go to the Sim Control Hub page to see the full information](https://dquiet-lab.github.io/sim-control-page/)
