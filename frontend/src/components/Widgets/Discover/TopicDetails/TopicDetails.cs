.topic-details__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topic-details__bot {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topic-details__title {
  font-weight: 600; /* Assuming $fw-semi-bold is 600 */
  font-size: 20px; /* Assuming $fz-llg */
  line-height: 32px;
  color: #FFFFFF; /* Assuming $white */
  display: flex;
  align-items: center;
}

.topic-details__title-icon {
  height: 32px;
  width: 32px;
  margin-right: 16px; /* Assuming $padding-md */
}

.topic-details__dropdown {
  width: 177px;
  top: 30px;
}

.topic-details__search {
  width: 408px;
  margin: 16px 0; /* Assuming $padding-llg */
}

.topic-details__stats {
  display: flex;
  align-items: center;
  gap: 16px; /* Assuming $padding-llg */
}

.topic-details__stats-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px; /* Assuming $fz-base */
  line-height: 24px;
}

.topic-details__stats-more {
  border-left: 1px solid #CCCCCC; /* Assuming $border */
  position: relative;
}

.topic-details__stats-more-btn {
  margin-left: 16px; /* Assuming $padding-llg */
  height: 32px;
  width: 32px;
  background: transparent;
  transition: all 0.3s ease; /* Assuming $transition-1 */
  border-radius: 4px; /* Assuming $br-xs */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.topic-details__stats-more-btn:hover {
  background: #F0F0F0; /* Assuming $white-light */
}
