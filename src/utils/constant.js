
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2NkMDBlZjBhZTRhOTIyOThiOTcyMjNmYmFkMmU3YyIsInN1YiI6IjY1YTM3MjMwYTM0OTExMDEyNzBhMTQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rDL00MMo246JkJQJjWmqe9FUCvzkljMTTMZ9kaUXKbc'
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const SUPPORTED_LANGUAGE = [
  {
    identifier: "en",
    name: "English"
  },
  {
    identifier: "hindi",
    name: "Hindi"
  },
  {
    identifier: "spanish",
    name: "Spanish"
  },
]
export const OPENAI_KEY = "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"


export const DUMMY_GPT_RESPONSE = [
  {
    finish_reason: "stop",
    index: 0,
    message: {
      role: 'assistant', content: 'Andaz Apna Apna, Hera Pheri, Amar Akbar Anthony, Jaane Bhi Do Yaaro, Padosan'
    }
  }
]