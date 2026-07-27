// ─────────────────────────────────────────────────────────────────────────────
// SEASONS OF THE HEART ORACLE — cards.js
// Single source of truth for all card data.
//
// To add a new card:
//   1. Set live: true and add page: 'cardname.html'
//   2. Update the oracle, highlight, body, and mantra fields with the full text
//   3. That's it — the card grid, draw experience, and nav all update automatically.
// ─────────────────────────────────────────────────────────────────────────────

const CARDS = [

  { id: 1, name: 'Gaman', kanji: '我慢',
    tagline: 'Enduring with dignity and inner grace',
    page: 'gaman.html', live: true,
    highlight: 'Endure with dignity — not denial. Let patience reveal your quiet power.',
    oracle: 'If Gaman has found you today, something in your life is asking for patience. Perhaps a situation with no quick resolution. A waiting period you didn\'t choose. A grief that must be moved through slowly, or a tension that cannot yet be released.',
    body: 'Gaman does not ask you to pretend it isn\'t hard. It asks you to meet difficulty without being consumed by it — to remain, in the middle of what is difficult, recognizably yourself. This card honors the one who keeps going quietly, who has learned that not every season calls for action.',
    mantra: '"I bend — but I do not break.<br>I endure with grace."' },

  { id: 2, name: 'Kaizen', kanji: '改善',
    tagline: 'Continuous improvement through small, mindful steps',
    page: 'kaizen.html', live: true,
    highlight: 'Begin where you are. Do one small thing with full presence. Then do it again tomorrow.',
    oracle: 'If Kaizen has found you today, something in your life is asking not for a grand overhaul, but for a gentle turning of attention. A dream you have set aside as too large. A habit you have tried to change all at once. Something you sense could become more than it is, if only you began.',
    body: 'Kaizen asks only that you bring genuine care to what is directly in front of you — and trust the quiet power of return. A routine elevated into ritual becomes a form of devotion. The life well-lived is not transformed in a single moment, but tended with patient, loving attention across a thousand ordinary days.',
    mantra: '"With each small act, I refine my life.<br>Every drop creates a ripple of change."' },

  { id: 3, name: 'Shokunin', kanji: '職人',
    tagline: 'The spirit of the master craftsperson',
    page: 'shokunin.html', live: true,
    highlight: 'How can you infuse your work with devotion rather than demand? What does mastery look like when no one is watching?',
    oracle: 'If Shokunin has found you today, something in your life is asking to be met with greater care. Perhaps a piece of work you have been rushing through, treating as an obligation rather than an offering. Perhaps a skill you have been too impatient to truly develop. Perhaps the simple, daily tasks of your life that you have been completing without presence.',
    body: 'The shokunin spirit does not reserve itself for grand creative endeavours. It is equally present in the way a floor is swept, a letter is written, or a cup of tea is made. The invitation is not to take on more — it is to give more of yourself to what is already in your hands, and to do it with the full weight of your attention.',
    mantra: '"Through devotion to my craft,<br>I become a vessel for beauty, patience, and purpose."' },

  { id: 4, name: 'Ganbaru', kanji: '頑張る',
    tagline: 'Doing one\'s best with full effort',
    page: 'ganbaru.html', live: true,
    highlight: 'Keep going — not with gritted teeth, but with an open heart. The sincerity of your effort is its own form of success.',
    oracle: 'If Ganbaru has found you today, something in your life is asking for your continued effort — not your perfect performance, not your greatest achievement, but the simple, sincere act of showing up and giving what you have. Perhaps you are in the middle of something difficult and the end is not yet in sight. Perhaps you are tired, and tempted to stop.',
    body: 'Ganbaru does not ask you to push past your limits or sacrifice your wellbeing for achievement. It asks that you give what you genuinely have, with full presence — trusting that wholehearted effort, even imperfect and tired, carries a dignity that results alone cannot give. And it also asks: where might effort have become exhaustion? Both pressing on and knowing when to rest require courage.',
    mantra: '"I give my best with patience and sincerity.<br>Each step carries meaning."' },

  { id: 5, name: 'Shisei', kanji: '姿勢',
    tagline: 'Posture and attitude as a way of being',
    page: 'shisei.html', live: true,
    highlight: 'Pause for a moment. Settle. Let your posture be your first sincere act — and let everything that follows come from there.',
    oracle: 'If Shisei has found you today, something is asking you to notice how you are showing up — not just to others, but to yourself. How are you holding your body right now? How are you entering the rooms of your own life? Are you arriving fully, or drifting in with part of yourself already elsewhere?',
    body: 'Shisei is not about performance or composure as mask. It is the alignment of inside and outside — bringing your body, your attention, and your intention into the same room at the same time. That quality of arrival changes everything it touches. And it begins not with how you look, but with the honesty of how you actually are.',
    mantra: '"I stand with calm sincerity.<br>My posture is my prayer."' },

  { id: 6, name: 'Kokorozashi', kanji: '志',
    tagline: 'The call of deep purpose and aspiration',
    page: 'kokorozashi.html', live: true,
    highlight: 'What vision calls to you beyond fear or approval? The heart already knows. The only question is whether you are willing to listen.',
    oracle: 'If Kokorozashi has found you today, something in your life is asking you to look up — not at what others are doing, not at what you think you should want, but at the vision that calls to you from beyond fear and beyond approval. Perhaps it has been calling for some time, quietly, while other concerns have filled the foreground.',
    body: 'Kokorozashi does not ask you to abandon practicality or make reckless leaps. It asks that you be honest about what genuinely matters to you, and let that honesty inform the direction of your life. Rise through sincerity rather than striving — not performing ambition, but moving in the direction your heart has been pointing all along.',
    mantra: '"I rise through purpose.<br>My heart is my compass."' },

  { id: 7, name: 'Chie', kanji: '知恵',
    tagline: 'Wisdom earned through lived experience',
    page: 'chie.html', live: true,
    highlight: 'How can you turn what you already know into compassionate action? Where might simplicity solve what complexity is only deepening?',
    oracle: 'If Chie has found you today, something in your life is asking not for more information, but for the willingness to look at what you already know with fresh eyes. You may have been circling a problem, accumulating analysis, waiting for the perfect answer — when what is actually needed is simpler and already within reach.',
    body: 'Chie asks you to bring your intelligence into contact with life — not to hold it above life. Observe before acting, listen before concluding, stay curious about the gap between what you think you understand and what is actually true. The crow does not reflect on the cleverness of its solution. It solves, and moves on. Knowledge held lightly becomes wisdom.',
    mantra: '"I apply what I know with care.<br>Wisdom grows through humility."' },

  { id: 8, name: 'Seiketsu', kanji: '清潔',
    tagline: 'Cleanliness and purity as inner practice',
    page: 'seiketsu.html', live: true,
    highlight: 'What clutter — physical or emotional — is asking to be released? How does tending your space reflect the care you have for yourself?',
    oracle: 'If Seiketsu has found you today, something is asking to be cleared. Not necessarily a desk or a room — though it may well begin there. What accumulates in the outer environment almost always has a counterpart in the inner one: the unfinished business left hanging, the emotion that has not been named, the commitment that no longer belongs to you but that you are still carrying.',
    body: 'Seiketsu does not ask for a grand purge or a perfect system. It asks for the next small act of care. Begin somewhere simple and notice how the act of clearing one small thing opens space for something in you to settle. Tending your environment is a quiet, private act of saying: what I have and who I am deserve to be cared for.',
    mantra: '"I keep my life clear and fresh.<br>In simplicity, I find peace."' },

  { id: 9, name: 'Kibō', kanji: '希望',
    tagline: 'Hope as an active, luminous force',
    page: 'kibo.html', live: true,
    highlight: 'What small light is already returning to your life? You do not need to see the whole path — only trust the direction of the light and take one step toward it.',
    oracle: 'If Kibō has found you today, something in your life is ready to turn toward the light — even if that turning is small, even if the light itself is still distant. Perhaps you are emerging from a long dark season. Perhaps hope feels fragile or even presumptuous. Perhaps you simply need permission to want things to be better, without that wanting being a denial of how hard things have been.',
    body: 'Kibō asks you to look — genuinely and without sentimentality — for what is already growing. Not what you wish were growing, but what is actually, quietly, beginning to stir. The light does not always arrive in dramatic form. It begins as something almost too small to notice, and grows only if it is seen and named. Hope holds both: this is hard, and something better is possible.',
    mantra: '"I walk toward the light with quiet faith.<br>Hope rises within me like morning sun."' },

  { id: 10, name: 'Yūki', kanji: '勇気',
    tagline: 'Courage — the willingness to act despite fear',
    page: 'yuki.html', live: true,
    highlight: 'What challenge is asking you to act with integrity right now? You already know what courage is being asked of you. The question is whether you will meet it with dignity or deflection.',
    oracle: 'If Yūki has found you today, something in your life is asking you to act — not impulsively, not aggressively, but with the steady, clear resolve of someone who knows what they stand for. Perhaps there is a challenge you have been circling without yet meeting. A conversation you have been avoiding. A boundary you have sensed needs to be held but have not yet held.',
    body: 'Yūki does not ask you to be fearless. It asks you to be honest about the fear and act anyway — grounded in the clarity of your values and the knowledge that some things are worth the discomfort of doing rightly. Courage of this quality is not loud. It is the quiet steadiness of someone who has decided. And it asks: how can you face conflict without losing compassion? The two are not opposites.',
    mantra: '"I meet challenges with dignity.<br>My courage is calm, not cruel."' },

  { id: 11, name: 'Wa', kanji: '和',
    tagline: 'Harmony, peace, and the art of accord',
    page: 'wa.html', live: true,
    highlight: 'How can you align with others without losing your authenticity? What rhythm of cooperation could strengthen, rather than diminish, both you and those around you?',
    oracle: 'If Wa has found you today, something in your life is asking you to consider your relationship to the people and systems around you. Are you contributing to a genuine harmony, or are you either holding yourself apart from what could nourish you — or disappearing into what others need at the expense of what you genuinely are?',
    body: 'Wa asks whether the version of yourself that shows up in your relationships is recognisably, honestly you. The harmony it points toward is not everyone agreeing or going along — it is the harmony of a choir where every voice, genuinely itself, contributes to something larger. Peace of this quality is not restored by avoidance. It is restored by everyone turning, with honesty and goodwill, toward what is real.',
    mantra: '"I move in harmony with life.<br>My peace contributes to the peace of all."' },

  { id: 12, name: 'Rei', kanji: '礼',
    tagline: 'Respect, reverence, and gracious conduct',
    page: 'rei.html', live: true,
    highlight: 'How can you bring more reverence into your daily exchanges? What does bowing inwardly — in attitude and tone — look like in the life you are actually living?',
    oracle: 'If Rei has found you today, something is asking you to bring more reverence into the texture of your daily life. Not as a performance — not the formal courtesy that maintains distance — but the deeper courtesy that comes from genuinely noticing the people you are with and the exchanges you are part of.',
    body: 'Every act of courtesy is a ripple of peace that extends beyond the moment in which it is offered. The conversation given full attention, the name remembered, the reply that shows you truly read what was written — each is a bow, however small. And Rei asks the same of your relationship with yourself: do you meet your own life with the same grace and genuine regard you would offer another?',
    mantra: '"I honor all beings with respect.<br>In every gesture, I meet the sacred."' },

  { id: 13, name: 'Omoiyari', kanji: '思いやり',
    tagline: 'Empathy — feeling into the heart of another',
    page: 'omoiyari.html', live: true,
    highlight: 'How can you sense others without losing yourself? What does it mean to truly listen — without rushing to fix, reassure, or resolve?',
    oracle: 'If Omoiyari has found you today, something in your life is asking you to listen more deeply — to move beneath the surface of what is being said into what is actually being felt. Perhaps someone close to you is carrying something they haven\'t yet found words for, and who needs not advice but presence. Perhaps you yourself are that person, longing to be heard beneath the words you have been managing to say.',
    body: 'Omoiyari asks you to bring your full, unhurried attention to the person in front of you — the spacious attention that can hold what is difficult without flinching, and stay. This card also carries tenderness for those who feel things deeply. If empathy is your gift, are you tending it with the same care you offer others? Are you protecting your emotional resources so that your sensitivity remains a source of connection rather than depletion?',
    mantra: '"I listen beneath words.<br>My empathy creates harmony and belonging."' },

  { id: 14, name: 'En', kanji: '縁',
    tagline: 'Fate, connection, and the ties that bind',
    page: 'en.html', live: true,
    highlight: 'Who has entered your life for a reason you are only beginning to understand? How can you nurture your web of connection with the care and attention it deserves?',
    oracle: 'If En has found you today, something is asking you to look at the connections in your life with fresh eyes — to notice who has entered your world recently, or long ago, in a way you perhaps have not yet fully taken in. Perhaps someone arrived at an unusual moment. Perhaps a relationship you have been treating as ordinary is quietly carrying something more significant than you have acknowledged.',
    body: 'En asks you to take your relationships seriously — not in a heavy way, but in a grateful one. The people woven into your life are not there by pure accident, and the threads connecting you to them are living things that respond to attention. You are held in a living web of meaning. Not every strand will prove significant — but some will, and the only way to know which is to show up with attention and care.',
    mantra: '"I honour the threads that connect all things.<br>I am woven into life\'s great design."' },

  { id: 15, name: 'On', kanji: '恩',
    tagline: 'Gratitude and the weight of received grace',
    page: 'on.html', live: true,
    highlight: 'Who has given to you in ways you can never fully repay? How might you honour them by extending that kindness onward into the world?',
    oracle: 'If On has found you today, something is asking you to pause and look back — not with nostalgia, but with the clear-eyed reverence of someone taking stock of what they have been given. Who has shaped you? Whose sacrifice, patience, generosity, or love made possible something in you that could not have arrived any other way? The gift is real, and this card asks that you acknowledge it.',
    body: 'On does not ask you to feel guilty about what you have received, or to exhaust yourself in repayment. It asks something more elegant: that you let the gratitude move through you and out the other side. The care you were given, the love that held you in your most formative moments — let all of this find expression not only in your thanks but in how you live, what you offer, who you show up for.',
    mantra: '"I honour the kindness that sustains me.<br>Gratitude flows through me into the world."' },

  { id: 16, name: 'Nintai', kanji: '忍耐',
    tagline: 'Patient endurance in the face of hardship',
    page: 'nintai.html', live: true,
    highlight: 'Where are you being asked to trust the process instead of pushing for resolution? How can you let time do what only time can do?',
    oracle: 'If Nintai has found you today, something in your life is asking you to slow down. Perhaps you are in the middle of a process that has its own timeline, and your pushing against it is causing more friction than progress. Perhaps a relationship is asking for unhurried presence. Perhaps you are waiting for an outcome, and the waiting itself is the work.',
    body: 'Nintai asks what it would mean to stop measuring the speed of something and start measuring the quality of your presence within it. The mountain does not apologise for taking geological time. What is being built in you through this season of endurance is real, even when it is invisible. And it asks honestly: is your patience genuine endurance — or avoidance wearing patience\'s clothing?',
    mantra: '"I trust in timing.<br>What is steady will endure."' },

  { id: 17, name: 'Shinsetsu', kanji: '親切',
    tagline: 'Kindness as a conscious, daily offering',
    page: 'shinsetsu.html', live: true,
    highlight: 'How can you bring gentle care into an ordinary moment today? What small act of warmth, offered freely and without agenda, might ripple further than you can see?',
    oracle: 'If Shinsetsu has found you today, something small is being asked of you — and something small is perhaps all that is needed. Not a grand resolution, but a single ordinary moment met with more genuine warmth than you might otherwise have offered. The message you keep meaning to send. The colleague you noticed was struggling. The cup of tea made with full attention. Begin there.',
    body: 'Shinsetsu asks about the quality of your kindness, not just its frequency. It is possible to perform kindness without genuine warmth behind it. The card is asking for the real thing: noticing someone and letting that noticing actually land in you before you respond. And it turns inward too — where have you been unkind to yourself in ways you would not allow toward someone you love? The warmth that nourishes the world has to begin somewhere.',
    mantra: '"Through simple acts of care,<br>I nourish the world."' },

  { id: 18, name: 'Chūgi', kanji: '忠義',
    tagline: 'Loyalty and devotion to what one holds dear',
    page: 'chugi.html', live: true,
    highlight: 'Where does your loyalty come from — fear or truth? Which commitments strengthen you, and which drain your spirit? The shrine flame is worth protecting. Make sure you know which one it is.',
    oracle: 'If Chūgi has found you today, something is asking you to examine the ground your loyalties are standing on. Not to abandon them — but to look honestly at why they exist, where they came from, and whether they are still in alignment with who you are and what you genuinely believe. Some commitments grow stronger under this examination. Others reveal themselves to have been built on fear rather than freely chosen devotion.',
    body: 'Chūgi asks you to consider the difference between loyalty that sustains and loyalty that depletes. The first flows from genuine care and shared values; it may require effort but does not require the suppression of your own truth. The second tends to cost something each time — a quiet compromise, a boundary crossed. True loyalty begins with loyalty to yourself. When you honour your own truth, your commitments to others become clean and strong.',
    mantra: '"I stand loyal to my truth.<br>My devotion is guided by integrity and love."' },

  { id: 19, name: 'Aimai', kanji: '曖昧',
    tagline: 'The gift of ambiguity and living with uncertainty',
    page: 'aimai.html', live: true,
    highlight: 'Where might you be asked to listen more gently? Can you honour what is unspoken without demanding it declare itself — and trust that understanding will arrive when it is ready?',
    oracle: 'If Aimai has found you today, something in your life is asking you to loosen your grip on certainty. Perhaps you are trying to resolve a feeling that is not yet ready to be named. Perhaps you are pushing a conversation toward a clarity the other person cannot yet give. Perhaps you are demanding of yourself a decision that the situation has not yet ripened into.',
    body: 'Aimai asks for a particular quality of receptivity — not giving up on questions, but asking them more gently and waiting longer between asking and expecting an answer. The space of not-knowing is not a failure. It is where the most honest and most alive things often live. Remain in it with curiosity rather than anxiety — and see what it reveals. This card also asks honestly: is your indirectness protecting something real, or protecting you from something real?',
    mantra: '"I welcome nuance and listen between the words.<br>In the in-between, understanding grows."' },

  { id: 20, name: 'Setsunai', kanji: '切ない',
    tagline: 'The bittersweet ache of longing and loss',
    page: 'setsunai.html', live: true,
    highlight: 'Where do beauty and sorrow meet in your life right now? How can you honour your sensitivity without drowning in it — letting the ache speak without letting it consume?',
    oracle: 'If Setsunai has found you today, something tender is present — aching quietly beneath the surface of your days, waiting for permission to be acknowledged. Perhaps you have been carrying a grief not yet given a name. Perhaps you have been moved by something and the feeling has stayed with you, half-joy and half-sorrow, and you have not known quite what to do with it.',
    body: 'Setsunai asks you to stay with what you feel — not to push through it or transform it into something more manageable, but to allow it to be what it is. The ache, when met with this quality of presence, tends not to overwhelm. It moves through in ways that numbness never allows, and leaves behind an understanding of others, of yourself, of what genuinely matters. Your tenderness is not a liability. It is the instrument through which you perceive what others miss.',
    mantra: '"I allow beauty and sorrow to shape me.<br>My tenderness is my strength."' },

  { id: 21, name: 'Wabi-Sabi', kanji: '侘寂',
    tagline: 'Finding beauty in imperfection and impermanence',
    page: 'wabi-sabi.html', live: true,
    highlight: 'How can you honour your own scars as stories of survival? What might you love more deeply if you stopped demanding perfection as the price of worthiness?',
    oracle: 'If Wabi-Sabi has found you today, something is asking you to look — really look — at what you have been treating as flawed or past its best. Perhaps it is a part of your own history you have been regarding with less than acceptance. Perhaps it is a relationship that carries marks of having been through things. Perhaps it is your own life, and the ways it has not unfolded according to plan.',
    body: 'Wabi-Sabi does not ask you to pretend loss is not loss. It asks you to allow the breaking, and the repair, and the marks that both leave behind to be part of what makes something real. The bowl repaired with gold does not hide the crack — it traces it in light. What is real is always more interesting than what is ideal. You, with all your history upon you, are more interesting than you were before any of it happened.',
    mantra: '"I find beauty in imperfection.<br>What is weathered is alive with grace."' },

  { id: 22, name: 'Shibui', kanji: '渋い',
    tagline: 'Understated elegance — beauty without adornment',
    page: 'shibui.html', live: true,
    highlight: 'Where can you choose quiet grace over performance? What reveals its beauty only when you slow down and truly notice — and are you giving yourself the quality of attention that makes such noticing possible?',
    oracle: 'If Shibui has found you today, something is inviting you to consider where you might choose quiet grace over performance. Perhaps you have been filling space that does not need filling. Perhaps you have been explaining something that would be better left to demonstrate itself. Perhaps you have been performing a quality that, if you trusted it, would simply be evident.',
    body: 'Shibui asks you to look at your life with a discerning and patient eye — to identify what genuinely matters and what is there only to fill space or to manage how you appear. This is not minimalism as lifestyle. It is the willingness to subtract until what remains has the inevitability that marks something truly refined. And it asks: is your restraint genuine, born of self-possession, or is it a kind of withholding? There is a difference.',
    mantra: '"I move with quiet grace.<br>My presence speaks softly but deeply."' },

  { id: 23, name: 'Ikigai', kanji: '生き甲斐',
    tagline: 'Your reason for being — the purpose that gets you up',
    page: 'ikigai.html', live: true,
    highlight: 'What makes your life feel meaningful right now — not in theory, but in the texture of your actual days? How might you nurture that through small, consistent actions rather than waiting for a larger clarity?',
    oracle: 'If Ikigai has found you today, something is asking you to look at what is already making your life feel meaningful — not the grand narrative of what you are supposed to be doing, but the small, specific, daily things that make you feel genuinely alive. Where does time disappear? What do you find yourself returning to without being asked? What are you doing when you feel most like yourself?',
    body: 'Ikigai does not ask you to have it all figured out. It asks something humbler and more reliable: notice what is already growing, and give it more of your deliberate attention. Purpose of this quality is not something you pursue. It is something you tend — and over time, it bears fruit. It also asks honestly: are you nurturing genuine meaning, or building a purposeful-looking life for external approval?',
    mantra: '"I live with purpose and joy.<br>What nourishes me becomes my gift to the world."' },

  { id: 24, name: 'Mono no Aware', kanji: '物の哀れ',
    tagline: 'The gentle sadness of passing things',
    page: 'mono-no-aware.html', live: true,
    highlight: 'What beauty have you been resisting letting go of? How might you honour change as part of love\'s nature — not its ending, but its deepening into something more real?',
    oracle: 'If Mono no Aware has found you today, something beautiful is passing — or has passed, or is in the process of becoming something different. Perhaps a season of your life is ending. Perhaps a relationship is changing shape. Perhaps something you have loved is no longer there in the same way, and you are in the particular tenderness of that recognition.',
    body: 'Mono no Aware does not ask you to rush your grief or find the silver lining. It asks that you be a willing witness to what is passing, with enough presence to feel the poignancy before it is gone. The autumn leaf is most beautiful in the falling. And the card asks: what is the loss showing you about what is true? What fades tends to make visible what endures.',
    mantra: '"I cherish the moment as it passes.<br>In impermanence, I find grace."' },

  { id: 25, name: 'Kanso', kanji: '簡素',
    tagline: 'Simplicity — eliminating the unnecessary',
    page: 'kanso.html', live: true,
    highlight: 'What can you release to make room for what truly matters? Where does simplicity bring you peace and clarity — and what has been preventing you from returning to it?',
    oracle: 'If Kanso has found you today, something in your life has become cluttered — and the clutter is making it difficult to see clearly. Perhaps your schedule holds more than it can meaningfully contain. Perhaps your mind is carrying so many competing concerns that none is receiving the attention it needs. Kanso does not judge the accumulation. It simply asks: what would you see if you cleared some of it?',
    body: 'Kanso is not about achieving minimalism as an aesthetic. It is an ongoing willingness to question what is genuinely necessary and release what is not. The question is not how little can I live with, but — when I look at what I am giving my attention to — what is essential, and what is simply there because I haven\'t yet let it go? This applies to the inner life too: what habits of mind might be ready to be questioned and released?',
    mantra: '"I return to what is essential.<br>In simplicity, I find truth."' },

  { id: 26, name: 'Seijaku', kanji: '静寂',
    tagline: 'Stillness and tranquility as a living practice',
    page: 'seijaku.html', live: true,
    highlight: 'Where can you pause to hear what silence wants to tell you? How can stillness become not an occasional refuge but a genuine part of your daily rhythm?',
    oracle: 'If Seijaku has found you today, the noise in your life has grown louder than what lies beneath it can be heard through. Perhaps you have been so continuously in motion that you have lost contact with your own centre. Perhaps there is a question at the heart of your days that keeps presenting itself and being postponed — because answering it would require the kind of stillness you haven\'t been allowing yourself.',
    body: 'Seijaku does not ask you to withdraw from your life. It asks you to introduce a quality of stillness into it — the pause before the response, the moment of genuine quiet before the day\'s demands arrive in full. These are small things. They require only the decision to stop, for long enough, to let what is beneath the surface become audible. The still lake is still deep even when the surface is disturbed. Find your way back to that depth.',
    mantra: '"In silence, I find my centre.<br>In stillness, I am whole."' },

  { id: 27, name: 'Shizen', kanji: '自然',
    tagline: 'Naturalness — returning to what is unforced',
    page: 'shizen.html', live: true,
    highlight: 'Where are you forcing what wants to unfold naturally? How can you return to your own rhythm — the pace and way of moving through the world that is genuinely yours?',
    oracle: 'If Shizen has found you today, something in your life is being forced — held in a shape that isn\'t quite its natural one. Perhaps you are managing an outcome that would benefit from being trusted. Perhaps you are performing a quality that, if you stopped performing it, might actually begin to arrive. Perhaps you are pushing through a period that is genuinely asking for a different pace.',
    body: 'Shizen does not ask you to stop trying. It asks you to examine the quality of the trying — to notice where effort feels like swimming upstream and ask whether the direction, the method, or the timing needs to change. Sometimes the stream is going somewhere you haven\'t yet accepted it is going. And it asks honestly: is this ease, or is it avoidance? The stream flows, but it always flows somewhere.',
    mantra: '"I move with life\'s rhythm.<br>In ease, I find harmony."' },

  { id: 28, name: 'Yūgen', kanji: '幽玄',
    tagline: 'The profound, mysterious beauty beyond words',
    page: 'yugen.html', live: true,
    highlight: 'Can you rest in wonder without seeking to define it? What unseen depth calls to you right now — not to be understood, but simply to be met, acknowledged, and allowed to nourish you?',
    oracle: 'If Yūgen has found you today, something is asking you to stop trying to understand — at least for a moment — and simply be present with what you cannot yet name. Perhaps you are in the presence of something beautiful that resists explanation. Perhaps you have been trying so hard to understand a feeling or a question that the trying itself is preventing you from experiencing what is actually there.',
    body: 'Yūgen asks for the willingness to encounter what exceeds you without immediately moving to reduce it to something more manageable. To stand before the misty mountain and let the mystery of what you cannot see be as present to you as what you can. This is not abandonment of intelligence but expansion of it — toward the dimension of experience that intelligence alone cannot reach. Not all beauty seeks understanding. Mystery is where the soul expands.',
    mantra: '"I welcome mystery and depth.<br>The unseen fills my spirit with wonder."' },

  { id: 29, name: 'Kachōfūgetsu', kanji: '花鳥風月',
    tagline: 'Flower, bird, wind, moon — the beauty of the natural world',
    page: 'kachofugetsu.html', live: true,
    highlight: 'How does nature mirror what is happening within you right now? What lesson is the season you are in — externally and internally — asking you to learn?',
    oracle: 'If Kachōfūgetsu has found you today, nature is calling you back — not necessarily to leave your life and seek a forest, but to step outside what is humanly constructed and allow the living world to speak to you. To notice the sky. To register the season your body is moving through. To attend, with genuine curiosity, to what the natural world around you is currently expressing.',
    body: 'Kachōfūgetsu asks for unhurried, purposeless noticing — the flower at the edge of the path you usually walk past, the quality of light this week, what the wind carries and clears. None of these require expertise or significant time. They require only the willingness to pause and receive what is already being offered. The living world is continuously speaking. The only question is whether you are still enough to hear it.',
    mantra: '"I learn from the living world.<br>In nature\'s rhythm, I find my truth."' },

  { id: 30, name: 'Hanami', kanji: '花見',
    tagline: 'Flower viewing — the joy of beauty shared',
    page: 'hanami.html', live: true,
    highlight: 'What beauty is asking you to pause and notice right now? How can you celebrate this moment — this unrepeatable, already-passing moment — without grasping for the next one?',
    oracle: 'If Hanami has found you today, something beautiful is already here — and you may be missing it. Not because you are careless, but because the pace of ordinary life makes it very easy to be somewhere other than where you are. To be in this moment while already anticipating the next. Hanami notices this and asks, gently but clearly: come back. Look up. The blossom is here now.',
    body: 'Hanami does not require a cherry tree or a picnic blanket. It requires only the willingness to bring deliberate, unhurried attention to whatever is in front of you right now. Any ordinary moment, given the quality of presence that hanami asks for, becomes something other than ordinary. And joy, this card reminds you, is something you practise — not something that arrives when conditions are finally right. The people under the blossoms do not wait until their lives are resolved to feel the beauty. They come now, in the middle of their actual lives, and they allow what is beautiful to be beautiful.',
    mantra: '"I pause to celebrate the fleeting moment.<br>This moment is radiant and enough."' }

];


// ─────────────────────────────────────────────────────────────────────────────
// SCROLL REVEAL — animates .reveal elements as they enter the viewport
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
});


// ─────────────────────────────────────────────────────────────────────────────
// CARD GRID — renders the full 30-card library on index.html
// Call: renderCardGrid('grid-container-id')
// ─────────────────────────────────────────────────────────────────────────────
function renderCardGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = CARDS.map(card => {
    if (card.live && card.page) {
      return `
        <a href="${card.page}" class="card-entry">
          <p class="card-number">Card ${String(card.id).padStart(2, '0')}</p>
          <p class="card-kanji">${card.kanji}</p>
          <p class="card-name">${card.name}</p>
          <p class="card-tagline">${card.tagline}</p>
        </a>`;
    } else {
      return `
        <div class="card-entry coming-soon">
          <p class="card-number">Card ${String(card.id).padStart(2, '0')}</p>
          <p class="card-kanji">${card.kanji}</p>
          <p class="card-name">${card.name}</p>
          <p class="card-tagline">${card.tagline}</p>
        </div>`;
    }
  }).join('');
}


// ─────────────────────────────────────────────────────────────────────────────
// CARD NAV — renders prev/next navigation on individual card pages
// Call: renderCardNav('nav-container-id', currentCardId)
// ─────────────────────────────────────────────────────────────────────────────
function renderCardNav(containerId, currentId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const prev = CARDS.find(c => c.id === currentId - 1);
  const next = CARDS.find(c => c.id === currentId + 1);

  const prevHTML = prev
    ? `<a href="${prev.page || '#'}" class="card-nav-link prev ${prev.live ? '' : 'disabled'}">
        <span class="card-nav-arrow">←</span>
        <span class="card-nav-kanji">${prev.kanji}</span>
        <div>
          <p class="card-nav-label">Previous Card</p>
          <p class="card-nav-title">${prev.name}${!prev.live ? ' — coming soon' : ''}</p>
        </div>
      </a>`
    : `<span class="card-nav-link prev disabled">
        <span class="card-nav-arrow">←</span>
        <div><p class="card-nav-label">Previous</p><p class="card-nav-title">—</p></div>
      </span>`;

  const nextHTML = next
    ? `<a href="${next.page || '#'}" class="card-nav-link next ${next.live ? '' : 'disabled'}">
        <div>
          <p class="card-nav-label">Next Card</p>
          <p class="card-nav-title">${next.name}${!next.live ? ' — coming soon' : ''}</p>
        </div>
        <span class="card-nav-kanji">${next.kanji}</span>
        <span class="card-nav-arrow">→</span>
      </a>`
    : `<span class="card-nav-link next disabled">
        <div><p class="card-nav-label">Next</p><p class="card-nav-title">—</p></div>
        <span class="card-nav-arrow">→</span>
      </span>`;

  el.innerHTML = `
    ${prevHTML}
    <span class="card-nav-divider"></span>
    ${nextHTML}
  `;
}


// ─────────────────────────────────────────────────────────────────────────────
// DRAW EXPERIENCE — used by index.html
// ─────────────────────────────────────────────────────────────────────────────
let hasDrawn = false;

function drawCard() {
  if (hasDrawn) return;
  hasDrawn = true;

  const idx  = Math.floor(Math.random() * CARDS.length);
  const card = CARDS[idx];

  const intro = document.getElementById('draw-intro');
  intro.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  intro.style.opacity    = '0';
  intro.style.transform  = 'translateY(-18px)';

  setTimeout(() => {
    intro.style.display = 'none';
    document.querySelector('.draw-hero').classList.add('drawn');
    renderDrawnCard(card);
  }, 440);
}

function renderDrawnCard(card) {
  const result = document.getElementById('draw-result');

  const pageLink = card.live && card.page
    ? `<a href="${card.page}" class="btn-primary" style="margin-top:0;">Read the Full Card →</a>`
    : `<span style="font-size:13px; color:var(--muted); font-style:italic; line-height:1.6;">The full page for this card is coming soon — it is available now in the printed deck.</span>`;

  result.innerHTML = `
    <div class="revealed-card">
      <p class="rc-eyebrow">Card ${String(card.id).padStart(2, '0')} of 30 · Your Reading</p>
      <div class="rc-card-image-wrap">
        <img src="card-${card.page.replace('.html', '')}.jpg" alt="${card.name} oracle card" class="rc-card-image" />
      </div>
      <p class="rc-kanji-bg">${card.kanji}</p>
      <h2 class="rc-title"><em>${card.name}</em></h2>
      <p class="rc-kanji-sub">${card.kanji} · ${card.tagline}</p>
      <div class="rc-rule"></div>
      <div class="rc-highlight"><p>${card.highlight}</p></div>
      <div class="rc-body">
        <p>${card.oracle}</p>
        ${card.body ? `<p>${card.body}</p>` : ''}
      </div>
      <div class="rc-mantra">
        <p class="rc-mantra-label">Your Mantra</p>
        <p class="rc-mantra-text">${card.mantra}</p>
      </div>
      <div class="rc-actions">
        ${pageLink}
        <button class="btn-ghost" onclick="resetDraw()" style="cursor:pointer; background:none;">Draw Another Card</button>
      </div>
    </div>
  `;

  result.classList.add('visible');
}

function resetDraw() {
  hasDrawn = false;
  const result = document.getElementById('draw-result');
  const intro  = document.getElementById('draw-intro');

  result.style.transition = 'opacity 0.35s ease';
  result.style.opacity    = '0';

  setTimeout(() => {
    result.classList.remove('visible');
    result.innerHTML     = '';
    result.style.opacity = '';

    document.querySelector('.draw-hero').classList.remove('drawn');

    intro.style.display   = 'flex';
    intro.style.opacity   = '0';
    intro.style.transform = 'translateY(20px)';

    requestAnimationFrame(() => {
      intro.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      intro.style.opacity    = '1';
      intro.style.transform  = 'translateY(0)';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 320);
}
