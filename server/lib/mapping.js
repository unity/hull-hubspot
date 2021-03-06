/* eslint-disable no-multi-spaces */
const HUBSPOT_MAPPING = [
  { name: "email",                                         hull: "email",                                       type: "string",  title: "Email"                                   },
  { name: "salutation",                                    hull: "hubspot/salutation",                          type: "string",  title: "Salutation"                              },
  { name: "firstname",                                     hull: "hubspot/first_name",                          type: "string",  title: "First Name"                              },
  { name: "lastname",                                      hull: "hubspot/last_name",                           type: "string",  title: "Last Name"                               },
  { name: "phone",                                         hull: "hubspot/phone",                               type: "string",  title: "Phone Number"                            },
  { name: "mobilephone",                                   hull: "hubspot/mobile_phone",                        type: "string",  title: "Mobile Phone Number"                     },
  { name: "address",                                       hull: "hubspot/address_street",                      type: "string",  title: "Street Address"                          },
  { name: "city",                                          hull: "hubspot/address_city",                        type: "string",  title: "City"                                    },
  { name: "zip",                                           hull: "hubspot/address_postal_code",                 type: "string",  title: "Postal Code"                             },
  { name: "state",                                         hull: "hubspot/address_state",                       type: "string",  title: "State/Region"                            },
  { name: "country",                                       hull: "hubspot/address_country",                     type: "string",  title: "Country"                                 },
  { name: "fax",                                           hull: "hubspot/fax",                                 type: "string",  title: "Fax Number"                              },
  { name: "company",                                       hull: "hubspot/company",                             type: "string",  title: "Company Name"                            },
  { name: "industry",                                      hull: "hubspot/industry",                            type: "string",  title: "Industry"                                },
  { name: "jobtitle",                                      hull: "hubspot/job_title",                           type: "string",  title: "Job Title"                               },
  { name: "numemployees",                                  hull: "hubspot/employees_count",                     type: "number",  title: "Number of Employees"                     },
  { name: "website",                                       hull: "hubspot/website",                             type: "string",  title: "Website URL"                             },
  { name: "createdate",                                    hull: "hubspot/created_at",                          type: "date",    title: "Create Date"                             },
  { name: "closedate",                                     hull: "hubspot/closed_at",                           type: "date",    title: "Close Date"                              },
  { name: "lastmodifieddate",                              hull: "hubspot/updated_at",                          type: "date",    title: "Last Modified Date"                      },
  { name: "annualrevenue",                                 hull: "hubspot/annual_revenue",                      type: "number",  title: "Annual Revenue"                          },
  { name: "total_revenue",                                 hull: "hubspot/total_revenue",                       type: "number",  title: "Total Revenue"                           },
  { name: "lifecyclestage",                                hull: "hubspot/lifecycle_stage",                     type: "string",  title: "Lifecycle Stage"                         },
  { name: "days_to_close",                                 hull: "hubspot/days_to_close",                       type: "number",  title: "Days To Close"                           },
  { name: "first_deal_created_date",                       hull: "hubspot/first_deal_created_at",               type: "date",    title: "First Deal Created Date"                 },
  { name: "num_associated_deals",                          hull: "hubspot/associated_deals_count",              type: "number",  title: "Associated Deals"                        },
  { name: "hubspot_owner_id",                              hull: "hubspot/hubspot_owner_id",                    type: "string",  title: "HubSpot Owner"                           },
  { name: "hs_email_optout",                               hull: "hubspot/email_optout",                        type: "boolean", title: "Opted out of all email"                  },
  { name: "blog_default_hubspot_blog_subscription",        hull: "hubspot/default_hubspot_blog_subscription",   type: "boolean", title: "Default HubSpot Blog Email Subscription" },
  { name: "message",                                       hull: "hubspot/message",                             type: "string",  title: "Message"                                 },
  { name: "recent_deal_amount",                            hull: "hubspot/recent_deal_amount",                  type: "number",  title: "Recent Deal Amount"                      },
  { name: "recent_deal_close_date",                        hull: "hubspot/recent_deal_closed_at",               type: "date",    title: "Recent Deal Close Date"                  },
  { name: "num_notes",                                     hull: "hubspot/notes_count",                         type: "number",  title: "Number of Sales Activities"              },
  { name: "num_contacted_notes",                           hull: "hubspot/contacted_notes_count",               type: "string",  title: "Number of times contacted"               },
  { name: "notes_last_contacted",                          hull: "hubspot/notes_last_contacted_at",             type: "date",    title: "Last Contacted"                          },
  { name: "notes_last_updated",                            hull: "hubspot/last_activity_at",                    type: "date",    title: "Last Activity Date"                      },
  { name: "notes_next_activity_date",                      hull: "hubspot/next_activity_at",                    type: "date",    title: "Next Activity Date"                      },
  { name: "hubspot_owner_assigneddate",                    hull: "hubspot/owner_assigned_at",                   type: "date",    title: "Owner Assigned Date"                     },
  { name: "hs_lead_status",                                hull: "hubspot/lead_status",                         type: "string",  title: "Lead Status"                             },
  { name: "hs_lifecyclestage_customer_date",               hull: "hubspot/became_customer_at",                  type: "date",    title: "Became a Customer Date"                  },
  { name: "hs_lifecyclestage_lead_date",                   hull: "hubspot/became_lead_at",                      type: "date",    title: "Became a Lead Date"                      },
  { name: "hs_lifecyclestage_marketingqualifiedlead_date", hull: "hubspot/became_marketing_qualified_lead_at",  type: "date",    title: "Became a Marketing Qualified Lead Date"  },
  { name: "hs_lifecyclestage_salesqualifiedlead_date",     hull: "hubspot/became_sales_qualified_lead_at",      type: "date",    title: "Became a Sales Qualified Lead Date"      },
  { name: "hs_lifecyclestage_subscriber_date",             hull: "hubspot/became_subscriber_at",                type: "date",    title: "Became a Subscriber Date"                },
  { name: "hs_lifecyclestage_evangelist_date",             hull: "hubspot/became_evangelist_at",                type: "date",    title: "Became an Evangelist Date"               },
  { name: "hs_lifecyclestage_opportunity_date",            hull: "hubspot/became_opportunity_at",               type: "date",    title: "Became an Opportunity Date"              },
  { name: "hs_lifecyclestage_other_date",                  hull: "hubspot/became_other_at",                     type: "date",    title: "Became an Other Lifecycle Date"          }
];


// Doesn't do anything for now.
// We should fetch each of those properties and send them to the Hubspot group.
//

// const hull_user = { .... }
// const hubspot_user = { .... }
// const traits = _.reduce(HUBSPOT_MAPPING,(traits, prop)=>{
//  traits[prop.hull] = hubspot_user[prop.name];
//  return traits
// }, {});
// hull.as(hull_user.id).traits(traits, { source: 'hubspot' });


/* Ignored Hubspot Default Properties */

// {name:"linkedinbio", title: "LinkedIn Bio"  },
// {name:"linkedinconnections", title: "LinkedIn Connections"  },
// {name:"linkedin_profile_link", title: "Linkedin Profile Link"  },
// {name:"twitterbio", title: "Twitter Bio"  },
// {name:"twitterprofilephoto", title: "Twitter Profile Photo"  },
// {name:"twitterhandle", title: "Twitter Username"  },
// {name:"followercount", title: "Follower Count"  },
// {name:"kloutscoregeneral", title: "Klout Score"  },
// {name:"hs_email_optout_396857", title: "Opted out of email: Default HubSpot Blog Subscription"  },
// {name:"hs_email_optout_396856", title: "Opted out of email: Marketing Information"  },
// {name:"hs_analytics_source", title: "Original Source"  },
// {name:"hs_analytics_source_data_1", title: "Original Source Drill-Down 1"  },
// {name:"hs_analytics_source_data_2", title: "Original Source Drill-Down 2"  },
// {name:"ipaddress", title: "IP Address"  },
// {name:"ip_city", title: "IP City"  },
// {name:"ip_country", title: "IP Country"  },
// {name:"ip_country_code", title: "IP Country Code"  },
// {name:"ip_state_code", title: "IP State Code/Region Code"  },
// {name:"ip_state", title: "IP State/Region }

module.exports = HUBSPOT_MAPPING;
