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
import { feedback } from './components/feedback.js'
import { feedbackData } from './data/feedbackData.js'
import { carousel } from './components/carousel.js';


/* Feedback end */

/* Choose plan start */
import { planData } from './data/planData.js';
import { planCards } from './components/plan.js';
/* Choose plan end */

/* Blog posts start */
import { blogData } from './data/blogData.js';
/* Blog posts end */

/* Advertise bar start */
import { brandsData } from './data/brandsData.js';
import { brandsCarousel } from './components/brandsCarousel.js'
/* Advertise bar end */

/* Footer start */
/* Footer end */

// COMPONENTS EXECUTION

galleryLinks();
galleryImg(galleryData);

renderAchievements(informationBarData);
new brandsCarousel('#brands_block', brandsData);

offeredservices(servicesInfo);

feedback('.carousel-inner', feedbackData);
carousel('.feedback');

planCards(planData);

blogRender(blogData);