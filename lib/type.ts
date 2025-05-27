export type ValidationErrors = Record<string, string>;

export type ValidationResult = {
     valid: boolean;
     errors: ValidationErrors;
};

export const validateBasicInfo = (data: {
     webinarName?: string;
     description?: string;
     date?: Date;
     time?: string;
     timeFormat?: "AM" | "PM";
}): ValidationResult => {
     const errors: ValidationErrors = {};

     if (!data.webinarName?.trim()) {
          errors.webinarName = "Webinar name is required";
     }

     if (!data.description?.trim()) {
          errors.description = "Description is required";
     }

     if (!data.date) {
          errors.date = "Date is required";
     }

     if (!data.time?.trim()) {
          errors.time = "Time is required";
     }
     const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

     if (!timeRegex.test(data.time!)) {
          errors.time = "Time must be in HH:MM format";
     }

     return {
          valid: Object.keys(errors).length === 0,
          errors,
     };
};

export const validateCTA = (data: {
     ctaLabel?: string;
     tags?: string[];
     ctaType: string;
     aiAgent?: string;
}): ValidationResult => {
     const errors: ValidationErrors = {};

     if (!data.ctaLabel?.trim()) {
          errors.ctaLabel = "CTA label is required";
     }

     if (!data.ctaType) {
          errors.ctaType = "Please select CTA type";
     }

     return {
          valid: Object.keys(errors).length === 0,
          errors,
     };
};

export const validateAdditionalInfo = (data: {
     lockChat?: boolean;
     couponCode?: string;
     couponEnabled?: boolean;
}): ValidationResult => {
     const errors: ValidationErrors = {};

     if (data.couponEnabled && !data.couponCode?.trim()) {
          errors.couponCode = "Coupon Code is required when enabled";
     }

     return {
          valid: Object.keys(errors).length === 0,
          errors,
     };
};
