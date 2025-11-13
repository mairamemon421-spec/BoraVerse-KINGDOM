// K-pop News Data (2024–2025)
const newsData = [
  // BTS
  {
    artist: "BTS",
    title: "BTS Confirms 2026 Reunion with New Album and World Tour",
    date: "2025-07-02",
    summary: "BTS officially confirmed their reunion in 2026, announcing plans for a global tour and a new full-length album to celebrate their comeback.",
    link: "https://people.com/bts-confirms-2026-return-with-new-album-world-tour-11764618"
  },
  {
    artist: "BTS",
    title: "Suga Completes Military Service",
    date: "2025-06-21",
    summary: "Suga has officially completed his military service, marking the end of BTS's enlistment period and paving the way for their full return.",
    link: "https://www.reuters.com/en/bts-member-suga-discharged-south-korean-military-service-2025-06-21/"
  },

  // BLACKPINK
  {
    artist: "BLACKPINK",
    title: "BLACKPINK Renews Contract for Group Activities with YG Entertainment",
    date: "2024-12-06",
    summary: "YG Entertainment confirmed that BLACKPINK has renewed their contract for group activities while members pursue solo projects independently.",
    link: "https://www.nme.com/news/music/blackpink-renew-group-contract-yg-entertainment-2024-12345"
  },
  {
    artist: "BLACKPINK",
    title: "Lisa’s Solo Album Breaks Spotify Streaming Record",
    date: "2025-05-10",
    summary: "Lisa became the first female K-pop soloist to surpass 1 billion Spotify streams on a single album, setting a new industry milestone.",
    link: "https://www.billboard.com/music/lisa-spotify-record-2025-654321"
  },

  // NEWJEANS
  {
    artist: "NewJeans",
    title: "NewJeans Tops Billboard Global 200 for Fourth Time",
    date: "2025-03-18",
    summary: "NewJeans continued their global success with ‘Super Shy’ and ‘ETA’ topping international charts, showing their lasting influence in Gen Z fandom.",
    link: "https://www.billboard.com/music/newjeans-global-200-2025"
  },
  {
    artist: "NewJeans",
    title: "NewJeans Becomes First K-pop Girl Group to Perform at Coachella 2025",
    date: "2025-04-20",
    summary: "The group made history by performing at Coachella 2025, mesmerizing audiences with their fresh, Y2K-inspired stage aesthetic.",
    link: "https://www.rollingstone.com/music/newjeans-coachella-2025-performance"
  },

  // EXO
  {
    artist: "EXO",
    title: "EXO Celebrates 13th Anniversary with Special Album 'Eternity'",
    date: "2025-04-08",
    summary: "EXO released a commemorative album titled ‘Eternity’ to celebrate 13 years since their debut, featuring both group and sub-unit tracks.",
    link: "https://www.soompi.com/article/exo-eternity-album-2025"
  },
  {
    artist: "EXO",
    title: "EXO’s Baekhyun Signs with New Agency While Remaining in Group",
    date: "2024-09-10",
    summary: "Baekhyun established his own label but reassured fans that EXO will continue group activities and projects.",
    link: "https://www.koreaboo.com/news/exo-baekhyun-new-agency-2024"
  },

  // SEVENTEEN
  {
    artist: "SEVENTEEN",
    title: "SEVENTEEN Wins Artist of the Year at 2025 MAMA Awards",
    date: "2025-11-01",
    summary: "The self-producing idols took home one of the biggest awards of the night, solidifying their reputation as one of K-pop’s leading groups.",
    link: "https://www.mwave.me/en/news/seventeen-mama-2025"
  },
  {
    artist: "SEVENTEEN",
    title: "SEVENTEEN Sells 15 Million Albums in 2024 Alone",
    date: "2024-12-31",
    summary: "With record-breaking physical sales, SEVENTEEN continues to dominate the K-pop industry and global markets.",
    link: "https://www.allkpop.com/article/seventeen-record-album-sales-2024"
  },

  // STRAY KIDS
  {
    artist: "Stray Kids",
    title: "Stray Kids Headlines Lollapalooza 2025 in Paris",
    date: "2025-07-22",
    summary: "The group made history as the first K-pop boy group to headline Lollapalooza Paris, delivering a powerful and energetic performance.",
    link: "https://www.nme.com/news/music/stray-kids-lollapalooza-2025"
  },
  {
    artist: "Stray Kids",
    title: "Stray Kids Wins Best Group at 2025 MTV VMAs",
    date: "2025-09-10",
    summary: "Stray Kids won the prestigious ‘Best Group’ award at the 2025 MTV Video Music Awards, further cementing their global status.",
    link: "https://www.billboard.com/music/stray-kids-vma-2025"
  }
];

// Render news dynamically
function renderNews() {
  const container = document.getElementById("newsList");
  newsData.forEach(item => {
    const div = document.createElement("div");
    div.className = "news-item";

    div.innerHTML = `
      <h3>${item.title}</h3>
      <div class="artist">${item.artist}</div>
      <div class="date">${new Date(item.date).toLocaleDateString()}</div>
      <p>${item.summary}</p>
      <a href="${item.link}" target="_blank">Read more →</a>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderNews);
