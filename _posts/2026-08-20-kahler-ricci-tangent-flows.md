---
layout: paper
title: "Kähler-Ricci Tangent Flows in the Analytic Minimal Model Program"
title_ja: "解析的極小モデル・プログラムにおけるKähler–Ricci接流"
authors: "Longteng Chen, Max Hallgren, Lucas Lavoyer"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.AP
  - math.CV
arxiv_abstract: >-
  We describe certain finite-time singularities of the Kähler-Ricci flow arising in the analytic minimal model program. Assuming that convergence to an asymptotically conical Kähler-Ricci shrinker is realized by holomorphic maps, we prove that, in a fixed holomorphic gauge, the nearby flow is modeled on the shrinker at the level of Kähler potentials. Consequently, every noncollapsed Kähler-Ricci flow through singularities in complex dimension two is modeled on a shrinker-cone-expander transition, confirming a strong form of Song's conjectural picture. We also show analogous results in higher dimensions under the Calabi ansatz, and improve known results in the compact shrinker case. These give the first compact Ricci flows through conical singularities whose small-scale behavior is fully described.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - singularities
  - birational-geometry
  - metric-limits
arxiv_id: "2608.19152v1"
arxiv_url: "https://arxiv.org/abs/2608.19152"
arxiv_submitted: "2026-08-19"
arxiv_updated: "2026-08-19"
summary: >-
  解析的MMPに現れる有限時間特異点を、収縮ソリトン・Kähler錐・膨張ソリトンの遷移として局所的に記述します。複素2次元では非崩壊Kähler–Ricci flowの手術像を確立し、高次元のCalabi ansatzの場合にも対応する結果を与えます。
abstract_en: >-
  We describe certain finite-time singularities of the Kähler-Ricci flow arising in the analytic minimal model program. Assuming that convergence to an asymptotically conical Kähler-Ricci shrinker is realized by holomorphic maps, we prove that, in a fixed holomorphic gauge, the nearby flow is modeled on the shrinker at the level of Kähler potentials. Consequently, every noncollapsed Kähler-Ricci flow through singularities in complex dimension two is modeled on a shrinker-cone-expander transition, confirming a strong form of Song's conjectural picture. We also show analogous results in higher dimensions under the Calabi ansatz, and improve known results in the compact shrinker case. These give the first compact Ricci flows through conical singularities whose small-scale behavior is fully described.
summary_en: ""
abstract_ja: >-
  解析的極小モデル・プログラムに由来するKähler–Ricci flowの有限時間特異点を調べる。漸近錐的収縮ソリトンへの収束が正則写像で実現されると仮定し、固定した正則ゲージで近傍のflowがKählerポテンシャルの水準までソリトンによりモデル化されることを示す。その結果、複素2次元の非崩壊flowでは収縮ソリトン・錐・膨張ソリトンの遷移が得られ、高次元のCalabi ansatzの場合にも類似の結論を導く。
abstract_source_url: "https://arxiv.org/abs/2608.19152"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.19152v1](https://arxiv.org/abs/2608.19152)
- **著者:** Longteng Chen, Max Hallgren, Lucas Lavoyer
- **初回投稿日・最終更新日:** 2026年8月19日
- **主分類・副分類:** math.DG（主分類）、math.AG、math.AP、math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

解析的MMPでは、Kähler–Ricci flowが曲線を収縮して特異空間へ達し、その先で別の双有理モデル上のflowへ移ると期待される。従来はGromov–Hausdorff連続性や接流の同定が知られる場合でも、手術近傍全体の小スケール幾何は十分に記述されていなかった。

本論文のTheorem Aは、接流が漸近錐的Kähler–Ricci収縮ソリトンで、近似が正則写像で実現されるという仮定の下、固定近傍で元のflowをソリトン計量と$\partial\bar\partial$-exactなポテンシャル摂動として表す。誤差とその導関数には錐の半径と時刻に応じた定量的減衰が付く。

この局所記述を、特異な錐から出るflowを扱う著者らの別結果と接続する。複素2次元では、入射側の収縮ソリトン、特異時刻の共通錐、出射側の膨張ソリトンというSongの予想図式が非崩壊flowに対して成立する。

高次元ではCalabi ansatzを備えたflipやdivisorial contractionに同様の結論を示す。一般の場合には正則近似が仮定であり、無条件の全次元定理ではない点が重要である。

## 背景と問題設定

特異時刻を$t=0$とすると、予想される局所モデルは、$t<0$のAC収縮ソリトン、$t=0$のKähler錐、$t>0$のAC膨張ソリトンである。IntroductionのConjecture 1.1は両側のType I曲率評価と、放物型リスケールの自己相似flowへの収束を要求する。本論文は単なる接流収束を、固定した正則座標での局所ポテンシャル評価へ強化する。

## 主結果

### 局所モデル定理（Theorem A）

有限時間特異点をもつコンパクトKähler–Ricci flowが、AC Kähler–Ricci shrinker $(M_{\mathrm{sol}},g_{\mathrm{sol}})$で正則に近似されると仮定する。このとき特異集合の固定近傍と錐頂点の近傍の間に双正則写像$F$があり、

$$
F^*\widetilde\omega_t=\omega_{\mathrm{sol},t}+\sqrt{-1}\,\partial\bar\partial\widetilde\varphi_t
$$

と書ける。さらに各$k$について

$$
|\nabla^k\widetilde\varphi_t|
\leq C_k\bigl(r+\sqrt{|t|}\bigr)^{2-k}
\left|\log\bigl(r+\sqrt{|t|}\bigr)\right|^{-1}
$$

という減衰評価を得る。特異時刻の錐側ポテンシャルにも$C_kr^{2-k}|\log r|^{-1}$の評価があり、接流と接錐の収束を同じ正則ゲージで制御する。

### 複素曲面とCalabi ansatzへの帰結（Corollaries B–D）

Introductionでは概略として次のように述べられている。複素2次元の非崩壊Kähler–Ricci flow through singularitiesは、収縮ソリトンから共通の錐を経て一意な膨張ソリトンへ移る局所モデルをもつ。高次元でもCalabi ansatzを満たすmetric flipとorbifoldへの標準的収縮について、出射側のType I評価と同じポテンシャル水準の記述が成立する。

## 証明の見取り図

接流収束と正則写像$\pi:M\to Y$から、ソリトンのRemmert reductionと特異空間の近傍を双正則に同定する。次に、元のflowと自己相似ソリトンflowの差を相対Kählerポテンシャルとして表し、修正flow上の重み付きエネルギーを解析する。非集中評価と放物型正則化を組み合わせ、積分的減衰をTheorem Aの各階導関数の点wise評価へ上げる。最後に錐から出る膨張ソリトンの一意性・局所モデルと接続して手術全体を記述する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.19152](https://arxiv.org/abs/2608.19152)
- **Introduction:** Section 1, pp. 1–10
- **Introduction中で言及された主要定理番号:** Theorem A; Corollaries B, C, D; Theorem E
- **論文構成の説明:** Section 1.3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
