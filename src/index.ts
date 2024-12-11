import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { displayGiftVariants } from "$minerva/displayGiftVariants";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  currentYear();
  displayGiftVariants();
});