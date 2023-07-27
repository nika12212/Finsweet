function showEnvironmentAlert() {
    const messages = [
      "🌳 Help us plant a tree today and make a greener tomorrow!",
      "🌊 Turn off the tap while brushing your teeth to conserve water!",
      "🚲 Choose cycling or walking over driving for short distances to reduce emissions!",
      "🌞 Use solar-powered chargers to save energy!",
      "🌱 Start composting your food waste and help reduce landfill!",
      "💡 Switch to energy-efficient LED bulbs and save electricity!",
      "🚮 Reduce, Reuse, Recycle - you can make a difference!",
      "🗑️ Participate in local clean-up events and keep our environment clean!",
      "🐝 Support local beekeepers and protect our pollinators!",
      "🏞️ Visit and appreciate the beauty of nature, and spread awareness to protect it!",
    ];
  

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  

    alert(randomMessage);
  }
  

  showEnvironmentAlert();