import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { displayGiftVariants } from "$minerva/giftForm";
import { cleanFormPostData } from "$minerva/giftForm";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  currentYear();
  cleanFormPostData();
  displayGiftVariants();
});