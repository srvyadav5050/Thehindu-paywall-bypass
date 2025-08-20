chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution:
            "https://www.smry.ai/proxy?url=https%3A%2F%2Fwww.thehindu.com%2F\\1"
        }
      },
      condition: {
        regexFilter: "^https://www\\.thehindu\\.com/(.+)$", 
        // note: (.+) ensures at least one char after /
        resourceTypes: ["main_frame"]
      }
    }
  ]
});
