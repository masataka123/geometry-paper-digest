---
layout: paper
title: "The Taub-NUT Metric Is Not Projectively Induced"
title_ja: "Taub--NUT計量は射影的に誘導されない"
authors: "Shaosai Huang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: "LeBrun's Kähler realization $g_m$ of the Taub--NUT metric on $\\mathbb{C}^2$ is complete, Ricci-flat and not flat. Loi, Zedda and Zuddas proved that no multiple $αg_m$ admits a Kähler immersion into a finite- or infinite-dimensional complex projective space when $m>α/2$, and conjectured that the same holds for every $m>0$. We prove the conjecture. The restriction of the Kähler potential to the axis $z_2=0$ is governed by the Lambert $W$ function, so $\\exp(αΦ_m)$ has a finite radius of convergence as a power series in $|z_1|^2$ although it is real analytic on the whole half-line; the Vivanti--Pringsheim theorem forbids nonnegative Taylor coefficients, and Calabi's criterion fails. We state the mechanism, which Arezzo, Loi, Placini and Zedda recently used for radial metrics, as a general obstruction to Kähler immersions. In statistical terms the axis restriction of $g_m$ would be a natural exponential family with mean domain $(0,\\infty)$ and variance function $μ/(1+2mμ)$; the argument gives an elementary proof of the known fact, due to Bar-Lev, Bshouty and Enis, that no such family exists with variance function $μ/(1+cμ)$ for any $c>0$. The result confirms onemore case of the conjecture of Loi, Salis and Zuddas that Ricci-flat projectively induced Kähler metrics are flat. The analytic core of the proof has been machine-checked in Lean~4."
topic: differential-geometry
tags:
  - curvature
  - kahler-einstein-metrics
arxiv_id: "2609.21950v1"
arxiv_url: "https://arxiv.org/abs/2609.21950"
arxiv_submitted: "2026-09-18"
arxiv_updated: "2026-09-18"
summary: "LeBrunによるTaub--NUT計量の任意の正の定数倍が、有限次元・無限次元を問わず複素射影空間へKähler等長埋め込みを持たないことを示す。Lambert $W$ 関数の分岐点とCalabiの判定法を結び、従来のパラメータ制限を除去する結果である。"
abstract_en: ""
summary_en: "The paper rules out projective Kähler immersions for every positive multiple of LeBrun’s Taub–NUT metric. Its argument restricts the potential to a coordinate axis, identifies a Lambert-function singularity, and combines the resulting finite convergence radius with a positivity criterion. The same mechanism is formulated as a broader obstruction for rotation-invariant curves in Kähler manifolds."
abstract_ja: "LeBrunの $\\mathbb C^2$ 上のTaub--NUT計量 $g_m$ は完備Ricci平坦で非平坦である。本論文は、任意の $m>0$ と $\\alpha>0$ に対し $\\alpha g_m$ が複素射影空間へのKähler等長埋め込みを持たないことを証明する。座標軸上のポテンシャルをLambert $W$ 関数で記述し、その分岐特異点と冪級数係数の非負性の矛盾を用いる。"
abstract_source_url: "https://arxiv.org/abs/2609.21950"
license_name: "CC BY-NC-ND 4.0"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.21950](https://arxiv.org/abs/2609.21950)
- **著者:** Shaosai Huang
- **初回投稿日:** 2026-09-18
- **最終更新日:** 2026-09-18
- **主分類・副分類:** math.DG
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

LeBrunによるTaub--NUT計量の任意の正の定数倍が、有限次元・無限次元を問わず複素射影空間へKähler等長埋め込みを持たないことを示す。Lambert $W$ 関数の分岐点とCalabiの判定法を結び、従来のパラメータ制限を除去する結果である。

LeBrunの $\mathbb C^2$ 上のTaub--NUT計量 $g_m$ は完備Ricci平坦で非平坦である。本論文は、任意の $m>0$ と $\alpha>0$ に対し $\alpha g_m$ が複素射影空間へのKähler等長埋め込みを持たないことを証明する。座標軸上のポテンシャルをLambert $W$ 関数で記述し、その分岐特異点と冪級数係数の非負性の矛盾を用いる。

この紹介はAbstractとIntroductionに記された主張と方法の範囲に限る。後続節の証明を独立に検証したものではない。

## 背景と問題設定

LeBrunの表示では $u,v\geq0$ を用いて $|z_1|=e^{m(u^2-v^2)}u$, $|z_2|=e^{m(v^2-u^2)}v$ とし、ポテンシャルは $\Phi_m=u^2+v^2+m(u^4+v^4)$ で与えられる。従来は $m>\alpha/2$ の場合だけ非埋め込み性が知られていた。

## 主結果

### 主定理（Theorem A）

任意の $m>0$ と $\alpha>0$ に対し、$(\mathbb C^2,\alpha g_m)$ は $N\leq\infty$ のどの $(\mathbb{CP}^N,g_{FS})$ にもKähler immersionを持たない。実際、座標軸 $\{z_2=0\}$ への制限だけで原点におけるCalabiの判定条件が破れる。

## 証明の見取り図

軸上で $U=u^2$ とおくと $|z_1|^2=Ue^{2mU}$ となり、$U$ はLambert $W$ 関数で表される。$\exp(\alpha\Phi_m)$ の冪級数は負の実軸上の分岐点により有限の収束半径を持つ一方、正の半直線上では解析的に延長される。Vivanti--Pringsheimの定理から係数がすべて非負ではあり得ず、Calabiの判定法に反する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.21950](https://arxiv.org/abs/2609.21950)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem A, Theorem B, Corollary C
- **確認したarXivバージョン:** 2609.21950v1
- **確認したライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source_scope:** Abstract and Introduction
