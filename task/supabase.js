const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ireslafhhzqhpflmbkno.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZXNsYWZoaHpxaHBmbG1ia25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4NTUzNjIsImV4cCI6MjAzNTQzMTM2Mn0.L8s5chPGTM28R27dCvB2GxooAHsRz59eevq-uV35q5g';
const supabase = createClient(supabaseUrl, supabaseKey);

async function addSubmission(nodeId, roundId, mostViewed, mostRead, signature) {
    const { data, error } = await supabase
        .from('submissions')
        .insert([{ node_id: nodeId, round_id: roundId, most_viewed: mostViewed, most_read: mostRead, signature }]);

    if (error) {
        console.error('Error inserting submission:', error);
    } else {
        console.log('Submission added:', data);
    }
}

module.exports = {
    addSubmission: addSubmission
}

// const mostViewedArticles = [
//   'LiveDemocrats warn of ‘dangerous precedent’ set by Trump ruling; Republican House speaker calls decision ‘common sense’ – live',
//   'US supreme court rules Trump has ‘absolute immunity’ for official acts',
//   'France 1-0 Belgium: Euro 2024 last 16 – as it happened',
//   'LiveRishi Sunak hints he might not quit as Tory leader immediately if he loses UK general election – live',
//   'Jude Bellingham investigated by Uefa over gesture after England goal',
//   'LiveWimbledon 2024: Gauff and Sinner in action, Raducanu safely through – live',
//   'Greece introduces ‘growth-oriented’ six-day working week',
//   'Military horses bolt through London again after three break loose',
//   'Boy killed stepfather before falsely claiming voices drove him to it, jury told',
//   'She could soon be the UK’s first female chancellor – but who is Rachel Reeves?'
// ];

// const mostReadArticles = [
//   'Why so rigid? Southgate’s in-game inertia remains a problem for England',
//   'Shangri-La, stetsons and SZA: Sunday at Glastonbury – a photo essay',
//   'When to shower, who to hug, how to get served … 24 things we learned about the world at Glastonbury 2024',
//   'She could soon be the UK’s first female chancellor – but who is Rachel Reeves?',
//   'The Age of Gareth lives on: England’s peaks and troughs lead to Swiss test',
//   'Macron is history, Le Pen is triumphant. What do ‘reasonable’ French voters like me do now?',
//   'Starmer advances on the Tory countryside with his flag of unenthusiastic hope',
//   'Star man Saka’s reliability makes him rock for England and Southgate',
//   'The big Glastonbury 2024 review: the Last Dinner Party justify the hype, Dua Lipa nails it and Coldplay go over the top',
//   'The tragic parable of Rishi Sunak: driven by success at all costs, then undone by his own myth-making'
// ];

// addSubmission('your-node-id', 1, mostViewedArticles, mostReadArticles, 'your-signature-here');
