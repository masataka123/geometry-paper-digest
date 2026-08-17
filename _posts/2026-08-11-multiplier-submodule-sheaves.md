---
layout: paper
title: "Finite Gram Scalarization and Further Properties of Multiplier Submodule Sheaves"
title_ja: "有限Gramスカラー化と乗数部分加群層の諸性質"
authors: "Jingcao Wu"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
topic: several-complex-variables
tags:
  - singularities
  - positivity
  - vector-bundles-sheaves
  - l2-methods
  - multiplier-ideals-extension
arxiv_id: "2608.08620v1"
arxiv_url: "https://arxiv.org/abs/2608.08620"
arxiv_submitted: "2026-08-09"
arxiv_updated: "2026-08-09"
summary: >-
  特異Hermite計量から定まる高階の乗数部分加群層を、有限個のスカラー乗数イデアルへ還元する「有限多重劣調和Gramスカラー化」を導入する。一般の正値性を仮定せずに連接性と強開性を導き、解析的特異点の下でjumping numberとSkoda型周期性を構成する。
abstract_en: ""
summary_en: >-
  The paper proposes a finite scalarization condition for singular Hermitian vector bundles. Under this condition, vector-valued local integrability can be tested through finitely many ordinary multiplier ideals after a modification. This yields coherence and strong openness without a general bundle-positivity assumption. With analytic singularities, the framework also produces module jumping numbers and an eventual Skoda-type recursion, together with criteria describing its obstructions.
abstract_ja: >-
  特異Hermiteベクトル束の乗数部分加群層について、有限個の多重劣調和重みと正則束写像からなるGramスカラー化条件を導入する。この条件により高階の可積分性を有限個のスカラー乗数イデアルへ還元し、連接性と強開性を得る。解析的特異点の場合にはjumping numberとSkoda型周期性、その降下の障害も記述する。
abstract_source_url: "https://arxiv.org/abs/2608.08620"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.08620](https://arxiv.org/abs/2608.08620)
- **著者:** Jingcao Wu
- **初回投稿日:** 2026年8月9日
- **最終更新日:** 2026年8月9日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

特異Hermite計量 $h$ を持つベクトル束 $E$ では、局所可積分な正則切断から乗数部分加群層 $\mathcal E(h)$ が定まる。階数1の乗数イデアルと違い、条件は行列値であり、有限個のスカラー問題へ還元できるとは限らない。

本論文は、適切な修正上で計量を有限個の多重劣調和重みと正則束写像のGram型和で比較できる「有限多重劣調和Gramスカラー化」を導入する。この仮定の下で $\mathcal E(h)$ は有限個の乗数イデアルの逆像の共通部分となる。

その結果、束全体に一般の正値性を課さず、連接性と強開性が得られる。さらに重みが解析的特異点を持つ場合、加群版jumping numberの離散性・有理性と、実際のjumpを検出する同時剰余条件を構成する。

最後にSkoda型フィルトレーションの漸近周期性を示す。スカラーの場合に加えて、Gram像との整合性と修正からの直像による降下という二つの障害が現れ、それぞれArtin–Rees・Torと直像商層で測られる。

## 背景と問題設定

定義は

$$
\mathcal E(h)_x=\{F\in\mathcal O(E)_x:\ |F|_h^2\in L^1_{\mathrm{loc},x}\}
$$

である。既知の連接性結果の多くはNakano半正値性、Griffiths半正値性と行列式の特異点条件などを仮定する。本論文は正値性とは別方向の、有限還元可能性を条件とする。

具体的には修正 $\pi:X'\to X$ 上で、局所的に

$$
|F|^2_{\pi^*h}\asymp\sum_{\nu=1}^N e^{-\varphi_\nu}|A_\nu F|^2
$$

となることを要求する。ここで $\varphi_\nu$ は多重劣調和関数、$A_\nu$ は正則束写像である。

## 主結果

### 連接性と強開性（Theorem 1.1）

$(E,h)$ が有限多重劣調和Gramスカラー化を持つなら $\mathcal E(h)$ は連接的である。さらに任意の準多重劣調和関数 $\psi$ に対し

$$
\mathcal E(h)=\bigcup_{\varepsilon>0}\mathcal E(he^{-\varepsilon\psi})
$$

が成り立つ。有限個のスカラー乗数イデアルの連接性・強開性を、修正に関する変換則で元の多様体へ戻す結果である。

### 正値性条件との独立性（Theorem 1.2）

単位円板上の自明な階数2束に、Griffiths半正値だが原点のどの近傍でも有限多重劣調和Gramスカラー化を持たない特異Hermite計量が存在する。したがって新条件は従来の束の正値性を単に言い換えたものではない。

### Skoda型周期性（Theorems 1.3, 1.4）

スカラー化重みが解析的特異点を持ち、局所的に

$$
\pi^*\psi=\frac rs\log\left(\sum_{\beta=1}^q|g_\beta|^2\right)+O(1),
\qquad \mathfrak a=(g_1,\ldots,g_q)
$$

とする。十分大きい整数 $k$ について

$$
\mathcal E\!\left(\pi^*(he^{-(k+s)\psi})\right)
=\mathfrak a^r\mathcal E\!\left(\pi^*(he^{-k\psi})\right)
$$

がスカラー化チャート上で成立する。元の多様体への降下では対応する包含が常に成り立ち、等号条件は直像と $\mathfrak a^r$ の可換性として記述される。

## 証明の見取り図

Gram比較式から、修正上の乗数部分加群を

$$
\bigcap_{\nu=1}^N A_\nu^{-1}(\mathcal I(\varphi_\nu)^{\oplus m_\nu})
$$

という有限共通部分に書く。スカラー乗数イデアルの既知の連接性と強開性を適用し、標準束を含む修正の変換則で下へ押し出す。

周期性についてはスカラーSkoda理論だけではGram写像の像と整合しないため、Artin–Reesで十分大きい指数での安定化を得て、開始点のずれをTorで測る。さらに修正上の等式を $X$ へ降ろす際の欠損を直像商層として分離する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.08620](https://arxiv.org/abs/2608.08620)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.4
- **論文構成の説明:** Introduction, pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
