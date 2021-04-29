// COMPONENTS AND DATA IMPORT

/* Header start */
/* Header end */

/* Introduction start */
/* Introduction end */

/* Personal details start */
/* Personal details end */

/* Offered services start */
/* Offered services end */

/* Information bar start */
import { animateNumbers, renderAchievements } from './components/informationBar.js';
import { informationBarData } from './data/informationBarData.js';
/* Information bar end */

/* Featured projects start */
import {galleryLinks} from './galleryLinks.js';
import {galleryData} from './galleryData.js';
import {galleryImg} from './galleryImg.js';
/* Featured projects end */

/* Feedback start */
import { feedback } from './feedback.js'
import { feedbackData } from './feedbackData.js'
/* Feedback end */

/* Choose plan start */
/* Choose plan end */

/* Blog posts start */
/* Blog posts end */

/* Advertise bar start */
/* Advertise bar end */

/* Footer start */
/* Footer end */

// COMPONENTS EXECUTION

galleryLinks();
galleryImg(galleryData);

/* Information bar */
renderAchievements(informationBarData);
animateNumbers();

feedback('.carousel-inner', feedbackData);
