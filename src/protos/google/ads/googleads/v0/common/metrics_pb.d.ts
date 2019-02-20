// package: google.ads.googleads.v0.common
// file: google/ads/googleads/v0/common/metrics.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v0_enums_interaction_event_type_pb from "../../../../../google/ads/googleads/v0/enums/interaction_event_type_pb";
import * as google_ads_googleads_v0_enums_quality_score_bucket_pb from "../../../../../google/ads/googleads/v0/enums/quality_score_bucket_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Metrics extends jspb.Message {
  hasAbsoluteTopImpressionPercentage(): boolean;
  clearAbsoluteTopImpressionPercentage(): void;
  getAbsoluteTopImpressionPercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAbsoluteTopImpressionPercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasActiveViewCpm(): boolean;
  clearActiveViewCpm(): void;
  getActiveViewCpm(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setActiveViewCpm(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasActiveViewCtr(): boolean;
  clearActiveViewCtr(): void;
  getActiveViewCtr(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setActiveViewCtr(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasActiveViewImpressions(): boolean;
  clearActiveViewImpressions(): void;
  getActiveViewImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setActiveViewImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasActiveViewMeasurability(): boolean;
  clearActiveViewMeasurability(): void;
  getActiveViewMeasurability(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setActiveViewMeasurability(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasActiveViewMeasurableCostMicros(): boolean;
  clearActiveViewMeasurableCostMicros(): void;
  getActiveViewMeasurableCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setActiveViewMeasurableCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasActiveViewMeasurableImpressions(): boolean;
  clearActiveViewMeasurableImpressions(): void;
  getActiveViewMeasurableImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setActiveViewMeasurableImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasActiveViewViewability(): boolean;
  clearActiveViewViewability(): void;
  getActiveViewViewability(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setActiveViewViewability(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAllConversionsFromInteractionsRate(): boolean;
  clearAllConversionsFromInteractionsRate(): void;
  getAllConversionsFromInteractionsRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionsFromInteractionsRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAllConversionsValue(): boolean;
  clearAllConversionsValue(): void;
  getAllConversionsValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionsValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAllConversions(): boolean;
  clearAllConversions(): void;
  getAllConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAllConversionsValuePerCost(): boolean;
  clearAllConversionsValuePerCost(): void;
  getAllConversionsValuePerCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionsValuePerCost(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAllConversionsFromInteractionsValuePerInteraction(): boolean;
  clearAllConversionsFromInteractionsValuePerInteraction(): void;
  getAllConversionsFromInteractionsValuePerInteraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionsFromInteractionsValuePerInteraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageCost(): boolean;
  clearAverageCost(): void;
  getAverageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCost(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageCpc(): boolean;
  clearAverageCpc(): void;
  getAverageCpc(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCpc(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageCpe(): boolean;
  clearAverageCpe(): void;
  getAverageCpe(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCpe(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageCpm(): boolean;
  clearAverageCpm(): void;
  getAverageCpm(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCpm(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageCpv(): boolean;
  clearAverageCpv(): void;
  getAverageCpv(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCpv(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageFrequency(): boolean;
  clearAverageFrequency(): void;
  getAverageFrequency(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageFrequency(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAveragePageViews(): boolean;
  clearAveragePageViews(): void;
  getAveragePageViews(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAveragePageViews(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAveragePosition(): boolean;
  clearAveragePosition(): void;
  getAveragePosition(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAveragePosition(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAverageTimeOnSite(): boolean;
  clearAverageTimeOnSite(): void;
  getAverageTimeOnSite(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageTimeOnSite(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBenchmarkAverageMaxCpc(): boolean;
  clearBenchmarkAverageMaxCpc(): void;
  getBenchmarkAverageMaxCpc(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBenchmarkAverageMaxCpc(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBenchmarkCtr(): boolean;
  clearBenchmarkCtr(): void;
  getBenchmarkCtr(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBenchmarkCtr(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBounceRate(): boolean;
  clearBounceRate(): void;
  getBounceRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBounceRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasClicks(): boolean;
  clearClicks(): void;
  getClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasContentBudgetLostImpressionShare(): boolean;
  clearContentBudgetLostImpressionShare(): void;
  getContentBudgetLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContentBudgetLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasContentImpressionShare(): boolean;
  clearContentImpressionShare(): void;
  getContentImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContentImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasConversionLastReceivedRequestDateTime(): boolean;
  clearConversionLastReceivedRequestDateTime(): void;
  getConversionLastReceivedRequestDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionLastReceivedRequestDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConversionLastConversionDate(): boolean;
  clearConversionLastConversionDate(): void;
  getConversionLastConversionDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionLastConversionDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasContentRankLostImpressionShare(): boolean;
  clearContentRankLostImpressionShare(): void;
  getContentRankLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContentRankLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasConversionsFromInteractionsRate(): boolean;
  clearConversionsFromInteractionsRate(): void;
  getConversionsFromInteractionsRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionsFromInteractionsRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasConversionsValue(): boolean;
  clearConversionsValue(): void;
  getConversionsValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionsValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasConversionsValuePerCost(): boolean;
  clearConversionsValuePerCost(): void;
  getConversionsValuePerCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionsValuePerCost(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasConversionsFromInteractionsValuePerInteraction(): boolean;
  clearConversionsFromInteractionsValuePerInteraction(): void;
  getConversionsFromInteractionsValuePerInteraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionsFromInteractionsValuePerInteraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasConversions(): boolean;
  clearConversions(): void;
  getConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCostMicros(): boolean;
  clearCostMicros(): void;
  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCostPerAllConversions(): boolean;
  clearCostPerAllConversions(): void;
  getCostPerAllConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCostPerAllConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCostPerConversion(): boolean;
  clearCostPerConversion(): void;
  getCostPerConversion(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCostPerConversion(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCostPerCurrentModelAttributedConversion(): boolean;
  clearCostPerCurrentModelAttributedConversion(): void;
  getCostPerCurrentModelAttributedConversion(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCostPerCurrentModelAttributedConversion(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCrossDeviceConversions(): boolean;
  clearCrossDeviceConversions(): void;
  getCrossDeviceConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCrossDeviceConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCtr(): boolean;
  clearCtr(): void;
  getCtr(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCtr(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrentModelAttributedConversions(): boolean;
  clearCurrentModelAttributedConversions(): void;
  getCurrentModelAttributedConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCurrentModelAttributedConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrentModelAttributedConversionsFromInteractionsRate(): boolean;
  clearCurrentModelAttributedConversionsFromInteractionsRate(): void;
  getCurrentModelAttributedConversionsFromInteractionsRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCurrentModelAttributedConversionsFromInteractionsRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrentModelAttributedConversionsFromInteractionsValuePerInteraction(): boolean;
  clearCurrentModelAttributedConversionsFromInteractionsValuePerInteraction(): void;
  getCurrentModelAttributedConversionsFromInteractionsValuePerInteraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCurrentModelAttributedConversionsFromInteractionsValuePerInteraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrentModelAttributedConversionsValue(): boolean;
  clearCurrentModelAttributedConversionsValue(): void;
  getCurrentModelAttributedConversionsValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCurrentModelAttributedConversionsValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrentModelAttributedConversionsValuePerCost(): boolean;
  clearCurrentModelAttributedConversionsValuePerCost(): void;
  getCurrentModelAttributedConversionsValuePerCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCurrentModelAttributedConversionsValuePerCost(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasEngagementRate(): boolean;
  clearEngagementRate(): void;
  getEngagementRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setEngagementRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasEngagements(): boolean;
  clearEngagements(): void;
  getEngagements(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEngagements(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHotelAverageLeadValueMicros(): boolean;
  clearHotelAverageLeadValueMicros(): void;
  getHotelAverageLeadValueMicros(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setHotelAverageLeadValueMicros(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getHistoricalCreativeQualityScore(): google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
  setHistoricalCreativeQualityScore(value: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): void;

  getHistoricalLandingPageQualityScore(): google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
  setHistoricalLandingPageQualityScore(value: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): void;

  hasHistoricalQualityScore(): boolean;
  clearHistoricalQualityScore(): void;
  getHistoricalQualityScore(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHistoricalQualityScore(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getHistoricalSearchPredictedCtr(): google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
  setHistoricalSearchPredictedCtr(value: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): void;

  hasGmailForwards(): boolean;
  clearGmailForwards(): void;
  getGmailForwards(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setGmailForwards(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasGmailSaves(): boolean;
  clearGmailSaves(): void;
  getGmailSaves(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setGmailSaves(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasGmailSecondaryClicks(): boolean;
  clearGmailSecondaryClicks(): void;
  getGmailSecondaryClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setGmailSecondaryClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasImpressionReach(): boolean;
  clearImpressionReach(): void;
  getImpressionReach(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setImpressionReach(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasImpressions(): boolean;
  clearImpressions(): void;
  getImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasInteractionRate(): boolean;
  clearInteractionRate(): void;
  getInteractionRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setInteractionRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasInteractions(): boolean;
  clearInteractions(): void;
  getInteractions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setInteractions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearInteractionEventTypesList(): void;
  getInteractionEventTypesList(): Array<google_ads_googleads_v0_enums_interaction_event_type_pb.InteractionEventTypeEnum.InteractionEventType>;
  setInteractionEventTypesList(value: Array<google_ads_googleads_v0_enums_interaction_event_type_pb.InteractionEventTypeEnum.InteractionEventType>): void;
  addInteractionEventTypes(value: google_ads_googleads_v0_enums_interaction_event_type_pb.InteractionEventTypeEnum.InteractionEventType, index?: number): google_ads_googleads_v0_enums_interaction_event_type_pb.InteractionEventTypeEnum.InteractionEventType;

  hasInvalidClickRate(): boolean;
  clearInvalidClickRate(): void;
  getInvalidClickRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setInvalidClickRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasInvalidClicks(): boolean;
  clearInvalidClicks(): void;
  getInvalidClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setInvalidClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPercentNewVisitors(): boolean;
  clearPercentNewVisitors(): void;
  getPercentNewVisitors(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPercentNewVisitors(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasPhoneCalls(): boolean;
  clearPhoneCalls(): void;
  getPhoneCalls(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPhoneCalls(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPhoneImpressions(): boolean;
  clearPhoneImpressions(): void;
  getPhoneImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPhoneImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPhoneThroughRate(): boolean;
  clearPhoneThroughRate(): void;
  getPhoneThroughRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPhoneThroughRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasRelativeCtr(): boolean;
  clearRelativeCtr(): void;
  getRelativeCtr(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setRelativeCtr(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchAbsoluteTopImpressionShare(): boolean;
  clearSearchAbsoluteTopImpressionShare(): void;
  getSearchAbsoluteTopImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchAbsoluteTopImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchBudgetLostAbsoluteTopImpressionShare(): boolean;
  clearSearchBudgetLostAbsoluteTopImpressionShare(): void;
  getSearchBudgetLostAbsoluteTopImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchBudgetLostAbsoluteTopImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchBudgetLostImpressionShare(): boolean;
  clearSearchBudgetLostImpressionShare(): void;
  getSearchBudgetLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchBudgetLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchBudgetLostTopImpressionShare(): boolean;
  clearSearchBudgetLostTopImpressionShare(): void;
  getSearchBudgetLostTopImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchBudgetLostTopImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchClickShare(): boolean;
  clearSearchClickShare(): void;
  getSearchClickShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchClickShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchExactMatchImpressionShare(): boolean;
  clearSearchExactMatchImpressionShare(): void;
  getSearchExactMatchImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchExactMatchImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchImpressionShare(): boolean;
  clearSearchImpressionShare(): void;
  getSearchImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchRankLostAbsoluteTopImpressionShare(): boolean;
  clearSearchRankLostAbsoluteTopImpressionShare(): void;
  getSearchRankLostAbsoluteTopImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchRankLostAbsoluteTopImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchRankLostImpressionShare(): boolean;
  clearSearchRankLostImpressionShare(): void;
  getSearchRankLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchRankLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchRankLostTopImpressionShare(): boolean;
  clearSearchRankLostTopImpressionShare(): void;
  getSearchRankLostTopImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchRankLostTopImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasSearchTopImpressionShare(): boolean;
  clearSearchTopImpressionShare(): void;
  getSearchTopImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchTopImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTopImpressionPercentage(): boolean;
  clearTopImpressionPercentage(): void;
  getTopImpressionPercentage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTopImpressionPercentage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasValuePerAllConversions(): boolean;
  clearValuePerAllConversions(): void;
  getValuePerAllConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setValuePerAllConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasValuePerConversion(): boolean;
  clearValuePerConversion(): void;
  getValuePerConversion(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setValuePerConversion(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasValuePerCurrentModelAttributedConversion(): boolean;
  clearValuePerCurrentModelAttributedConversion(): void;
  getValuePerCurrentModelAttributedConversion(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setValuePerCurrentModelAttributedConversion(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasVideoQuartile100Rate(): boolean;
  clearVideoQuartile100Rate(): void;
  getVideoQuartile100Rate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setVideoQuartile100Rate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasVideoQuartile25Rate(): boolean;
  clearVideoQuartile25Rate(): void;
  getVideoQuartile25Rate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setVideoQuartile25Rate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasVideoQuartile50Rate(): boolean;
  clearVideoQuartile50Rate(): void;
  getVideoQuartile50Rate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setVideoQuartile50Rate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasVideoQuartile75Rate(): boolean;
  clearVideoQuartile75Rate(): void;
  getVideoQuartile75Rate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setVideoQuartile75Rate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasVideoViewRate(): boolean;
  clearVideoViewRate(): void;
  getVideoViewRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setVideoViewRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasVideoViews(): boolean;
  clearVideoViews(): void;
  getVideoViews(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setVideoViews(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasViewThroughConversions(): boolean;
  clearViewThroughConversions(): void;
  getViewThroughConversions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setViewThroughConversions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metrics.AsObject;
  static toObject(includeInstance: boolean, msg: Metrics): Metrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metrics;
  static deserializeBinaryFromReader(message: Metrics, reader: jspb.BinaryReader): Metrics;
}

export namespace Metrics {
  export type AsObject = {
    absoluteTopImpressionPercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    activeViewCpm?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    activeViewCtr?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    activeViewImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    activeViewMeasurability?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    activeViewMeasurableCostMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    activeViewMeasurableImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    activeViewViewability?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversionsFromInteractionsRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversionsValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversionsValuePerCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversionsFromInteractionsValuePerInteraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCpc?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCpe?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCpm?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCpv?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageFrequency?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averagePageViews?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averagePosition?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageTimeOnSite?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    benchmarkAverageMaxCpc?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    benchmarkCtr?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    bounceRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    clicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    contentBudgetLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    contentImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionLastReceivedRequestDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionLastConversionDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    contentRankLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionsFromInteractionsRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionsValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionsValuePerCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionsFromInteractionsValuePerInteraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    costPerAllConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    costPerConversion?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    costPerCurrentModelAttributedConversion?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    crossDeviceConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    ctr?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currentModelAttributedConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currentModelAttributedConversionsFromInteractionsRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currentModelAttributedConversionsFromInteractionsValuePerInteraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currentModelAttributedConversionsValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currentModelAttributedConversionsValuePerCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    engagementRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    engagements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    hotelAverageLeadValueMicros?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    historicalCreativeQualityScore: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
    historicalLandingPageQualityScore: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
    historicalQualityScore?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    historicalSearchPredictedCtr: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
    gmailForwards?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    gmailSaves?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    gmailSecondaryClicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    impressionReach?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    impressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    interactionRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    interactions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    interactionEventTypesList: Array<google_ads_googleads_v0_enums_interaction_event_type_pb.InteractionEventTypeEnum.InteractionEventType>,
    invalidClickRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    invalidClicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    percentNewVisitors?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    phoneCalls?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    phoneImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    phoneThroughRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    relativeCtr?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchAbsoluteTopImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchBudgetLostAbsoluteTopImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchBudgetLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchBudgetLostTopImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchClickShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchExactMatchImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchRankLostAbsoluteTopImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchRankLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchRankLostTopImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchTopImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    topImpressionPercentage?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    valuePerAllConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    valuePerConversion?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    valuePerCurrentModelAttributedConversion?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    videoQuartile100Rate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    videoQuartile25Rate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    videoQuartile50Rate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    videoQuartile75Rate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    videoViewRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    videoViews?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    viewThroughConversions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

