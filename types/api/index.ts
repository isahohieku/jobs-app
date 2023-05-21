export interface Job {
    employer_name: string;
    employer_logo: string;
    employer_website: string;
    employer_company_type: string;
    job_publisher: string;
    job_id: string;
    job_employment_type: string;
    job_highlights: {
      Qualifications: string[];
      Responsibilities: string[];
    };
    job_title: string;
    job_apply_link: string;
    job_description: string;
    job_state: string;
    job_country: string;
    job_google_link: string;
  }