// COMPONENTS AND DATA IMPORT

/* Header start */
/* Header end */

/* Introduction start */
/* Introduction end */

/* Personal details start */
/* Personal details end */

/* Offered services start */
import { servicesInfo } from './data/services.js';
import { offeredservices } from './components/offeredservices.js';
/* Offered services end */

/* Information bar start */
import { renderAchievements } from './components/informationBar.js';
import { informationBarData } from './data/informationBarData.js';
/* Information bar end */

/* Featured projects start */
import { galleryLinks } from './components/galleryLinks.js';
import { galleryData } from './data/galleryData.js';
import { galleryImg } from './components/galleryImg.js';
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
import { logosData } from './data/advertiseData.js';
import { renderLogos } from './components/advertiseBar.js'
/* Advertise bar end */

/* Footer start */
/* Footer end */

// COMPONENTS EXECUTION

galleryLinks();
galleryImg(galleryData);

/* Information bar */
renderAchievements(informationBarData);
renderLogos(logosData);

offeredservices(servicesInfo);

feedback('.carousel-inner', feedbackData);