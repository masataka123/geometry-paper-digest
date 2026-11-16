---
layout: paper
title: A constructive computer-assisted existence proof for a Calabi--Yau metric
title_ja: Fermat四次曲面上のCalabi–Yau計量の誤差保証付き構成
authors: Michael R. Douglas, Javier Gómez-Serrano, Fabian Lehmann, Daniel Platt, Yidi Qi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- hep-th
arxiv_abstract: We give a rigorous, constructive proof that there exists a Ricci-flat Kähler metric on the Fermat quartic hypersurface, independently of Yau's famous theorem, along with an explicit and accurate analytic approximation to the metric. The proof combines numerical techniques to obtain the approximately Ricci flat metric, a fixed point theorem to prove existence, and verified numerics to get the bounds used by the fixed point theorem. The method is general and we discuss the computational issues in applying it to other manifolds.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- calabi-yau-geometry
- monge-ampere-equations
- curvature
arxiv_id: 2611.16908v1
arxiv_url: https://arxiv.org/abs/2611.16908
arxiv_submitted: '2026-11-12'
arxiv_updated: '2026-11-12'
summary: Fermat四次曲面上で、明示的な近似Kähler計量の近くに真のRicci-flat計量が存在することを誤差評価付きで示す。保証付き数値計算と楕円型解析を組み合わせ、近似の残差が小さいというだけでなく計量そのものとの差を抑える。存在を前提にしないため、この例ではYauの定理に独立な構成的存在証明となる。
abstract_en: ''
summary_en: A small numerical residual does not by itself measure the distance to an exact Ricci-flat metric. The authors bridge this gap for the Fermat quartic by certifying geometric and analytic estimates around an explicitly constructed Kähler form. Their perturbation argument proves existence and controls the correction, rather than assuming an exact solution in advance. The result gives a concrete example of quantitative access to a Calabi–Yau metric away from a degenerating limit.
abstract_ja: Fermat四次曲面について、高精度の近似Kähler計量を構成し、その近傍にRicci-flat Kähler計量が存在することを厳密に証明する。数値的最適化の残差を保証付き計算で評価し、必要な幾何量の明示的な上界・下界と固定点法を組み合わせることで、近似計量と真の計量の差に数値的な保証を与える。一般のCalabi–Yau多様体への適用可能性は議論するが、主定理の具体的対象はFermat四次曲面である。
abstract_source_url: https://arxiv.org/abs/2611.16908
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.16908v1](https://arxiv.org/abs/2611.16908)
- **著者:** Michael R. Douglas, Javier Gómez-Serrano, Fabian Lehmann, Daniel Platt, Yidi Qi
- **初回投稿日:** 2026-11-12
- **最終更新日:** 2026-11-12
- **主分類・副分類:** math.DG（主分類）; hep-th
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yauの定理はCalabi–Yau計量の存在を保証するが、特定の多様体上でその計量を数値的・定量的に扱うには別の情報が必要となる。近似計量を計算してRicci-flat方程式の誤差を小さくできても、それだけで真の計量にどれほど近いかは分からない。本論文は、この隔たりをFermat四次曲面で埋める。

著者らは明示的な高精度近似計量を作り、その誤差を保証付き数値計算で評価する。さらに、直径、Ricci曲率、スペクトルギャップなどの幾何量を明示的に抑え、楕円型解析と固定点法によって近傍に真のRicci-flat Kähler計量を構成する。

重要なのは、既存の存在定理を前提に近似を正当化するのではなく、摂動論そのものが存在と誤差保証を同時に与えることである。従って対象のFermat四次曲面についてはYauの存在証明に依存しない。一般のCalabi–Yau多様体すべてに同じ数値評価を確立したわけではない。

## 背景と問題設定

対象は滑らかな四次曲面

$$
M=\left\lbrace (X\_0:X\_1:X\_2:X\_3)\in\mathbb P^3:
X\_0^4+X\_1^4+X\_2^4+X\_3^4=0\right\rbrace
$$

である。退化極限に近い計量には接着や漸近解析による記述がある一方、そこから離れた具体例の定量的な把握は難しい。通常の数値計算で使われるMonte Carlo型誤差推定と、数学的に保証された一様な評価を区別する必要がある。

本論文の $\omega$ は明示的に構成された近似Kähler形式で、その計量を $g$ と書く。主定理は $\omega$ に $i\partial\bar\partial u$ を加えて真のCalabi–Yau形式へ補正できることと、その補正の大きさを扱う。

## 主結果

### 主定理（Theorem 1.1）

原論文の式(2.3)で定める明示的なKähler形式 $\omega$ に対し、滑らかな関数 $u\in C^\infty(M)$ が存在して、$\omega+i\partial\bar\partial u$ はCalabi–Yau形式となり、

$$
\Vert u\Vert \_{\mathcal X}\leq1.551\cdot10^{-4}
$$

を満たす。特に

$$
\Vert i\partial\bar\partial u\Vert \_{C^0(M,g)}\leq1.553\cdot10^{-4}
$$

となる。$\mathcal X$ ノルムは、原論文Section 4.3で定める $C^{2,\alpha}$ ノルムと $H^2$ ノルムの重み付き和である。ここでその重みや式(2.3)の係数をIntroductionから再構成しているわけではない。

二つ目の評価は、方程式の残差ではなく、近似Kähler形式と真のKähler形式との差を通常の $C^0$ ノルムで抑える。この区別が、数値候補を得ることから厳密な計量の定量的記述へ進む核心である。

## 証明の見取り図

第一段階で高精度な近似計量を数値的に構成し、第二段階でTaylor modelを用いる保証付き計算により残差を厳密に抑える。数値探索の段階で使う非厳密な評価と、この保証の段階は分けられている。

次に明示的な座標系を用いて計量と座標変換の微分、直径、Ricci曲率の下界、対称性を持つ関数上のLaplace作用素のスペクトルギャップを評価する。これらを使ってLaplace作用素の逆の作用素ノルムを抑え、複素Monge–Ampère方程式の非線形項と残差を固定点法で制御する。Introductionに基づく本記事では、付属コードや保証付き計算そのものの再実行は行っていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.16908)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.16908v1) — Section 1, pp. 2–4（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.16908v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
