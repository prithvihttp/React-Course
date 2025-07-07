import React from 'react'    // rfce shortcuts

function Card({channel}) {
    console.log(channel);
    
  return (
    <div>
    
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/31064221/pexels-photo-31064221/free-photo-of-vintage-style-portrait-with-urban-background.jpeg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”{channel}
      </p>
    </blockquote>
    <figcaption>
      <div>
        Saran Sedna
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
</div>
  )
}

export default Card