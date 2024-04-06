package backend

type Activity struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	Size         string `json:"size"`
	Hash         string `json:"hash"`
	Status       string `json:"status"`
	ShowDropdown bool   `json:"showDropdown"`
	Peers        int    `json:"peers"`
}

var activities = []Activity{}

func (b *Backend) GetActivities() ([]Activity, error) {
	return activities, nil
}

func (b *Backend) SetActivity(activity Activity) error {
	activities = append(activities, activity)
	return nil
}

func (b *Backend) RemoveActivity(id int) error {

	for i, activity := range activities {
		if activity.ID == id {
			activities = append(activities[:i], activities[i+1:]...)
			return nil
		}
	}
	return nil
}

func (b *Backend) UpdateActivityName(id int, name string) error {
	for i, activity := range activities {
		if activity.ID == id {
			activities[i].Name = name
			return nil
		}
	}
	return nil
}
