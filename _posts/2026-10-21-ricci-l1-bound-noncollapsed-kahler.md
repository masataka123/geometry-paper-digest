---
layout: paper
title: An $L^1$ bound for Ricci curvature on Kähler manifolds
title_ja: 非崩壊Kähler多様体のRicci曲率に対する一様L¹評価
authors: Wenshuai Jiang, Gang Liu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove a uniform $L^1$ bound for Ricci curvature on noncollapsed K\"ahler manifolds with Ricci curvature bounded below. The proof combines the codimension two neck decomposition and entropy estimates with local K\"ahler geometry on regular balls. The key step is a linear control of the Ricci integral on a regular ball by the entropy pinching, obtained from a decomposition of the scalar-curvature integral that exploits the K\"ahler structure.
topic: differential-geometry
tags:
- curvature
- noncompact-kahler-geometry
- metric-limits
arxiv_id: 2610.28142v1
arxiv_url: https://arxiv.org/abs/2610.28142
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-20'
summary: Ricci曲率の下限と単位球の体積下限だけから、完備Kähler多様体のRicci曲率の局所L¹ノルムを一様に評価する。一般の球について既知の評価に必要だった偏極の仮定を除き、余次元2のneck分解とKähler幾何を結びつける。
abstract_en: We prove a uniform $L^1$ bound for Ricci curvature on noncollapsed K\"ahler manifolds with Ricci curvature bounded below. The proof combines the codimension two neck decomposition and entropy estimates with local K\"ahler geometry on regular balls. The key step is a linear control of the Ricci integral on a regular ball by the entropy pinching, obtained from a decomposition of the scalar-curvature integral that exploits the K\"ahler structure.
summary_en: ''
abstract_ja: 完備Kähler多様体において、Ricci曲率が下から一様に有界で単位球が非崩壊なら、その球上のRicci曲率のL¹ノルムは次元と体積下限だけで抑えられる。余次元2のneck分解・エントロピー評価と、ほぼEuclid的な球上の局所複素幾何を併用する。主要な新しい評価は、neck内の正則な球上の曲率積分をエントロピーの変化量で線形に制御することである。
abstract_source_url: https://arxiv.org/abs/2610.28142
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.28142v1](https://arxiv.org/abs/2610.28142)
- **著者:** Wenshuai Jiang, Gang Liu
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Ricci曲率に下限を置いても、正の曲率が局所的に集中する可能性は残る。本論文は、完備Kähler多様体の単位球に体積の下限も仮定すれば、Ricci曲率の絶対値の積分を一様に抑えられると述べる。曲率の上限や偏極は仮定しない。

これは、非崩壊を仮定したYauのスカラー曲率予想のKählerの場合に対応する。一般のRiemannian多様体で知られていた指数$0<p<1$の評価に対し、ここで目指すのは端点$p=1$である。Kählerの場合にも一般の球では偏極付きの結果が先行しており、その仮定を取り除く点が新しい。

鍵となるのは、曲率積分をただ有限に抑えるだけでなく、各スケールでのエントロピーの変化量に比例させることである。これにより、小さな球の評価を無数のスケールにわたり加えても、総量を制御できる。

## 背景と問題設定

非崩壊とは、ここでは中心$p$の単位球の体積が固定された正の数$v$以上であることを指す。Introductionは、非崩壊条件を外した一般のRiemannian設定には反例があること、またYau予想の別の漸近的定式化にも反例があることを説明する。本論文の局所定理と、それらの別問題を混同しないことが重要である。

Kähler幾何では、ほぼEuclid的な球に正則座標を構成して局所スカラー曲率積分を評価するLiu–Székelyhidiの仕事が利用できる。Ricci下限の下では、その積分評価はRicciテンソルの局所L¹評価と対応する。しかし一般の非崩壊球には特異な円錐に近い領域も現れ、正則な球だけを扱う議論では足りない。

## 主結果

### 非崩壊単位球上のRicci積分評価（Theorem 1.1）

実次元$n=2m\ge2$の完備Kähler多様体$(M^n,g,J,p)$について

$$
\operatorname{Ric}\_g\ge-(n-1)g,\qquad\operatorname{Vol}\_g(B\_1(p))\ge v>0
$$

を仮定すると、次元と$v$だけに依存する定数$C(n,v)$が存在して

$$
\int\_{B\_1(p)}|\operatorname{Ric}\_g|\thinspace dV\_g\le C(n,v)
$$

が成り立つ。$n$は複素次元ではなく実次元である。個々の多様体に依存しない評価であり、曲率の点ごとの上限や全曲率テンソルの同じ評価を主張するものではない。

既知の偏極付きKähler多様体の結果を、偏極を仮定しない一般のKähler多様体へ拡張する。非崩壊、完備性、Ricci下限、Kähler構造が定理の主要な条件である。

## 証明の見取り図

Cheeger–Jiang–Naberの余次元2のneck構造・分解・局所エントロピー評価を使い、球をほぼEuclid的な部分とneck領域へ分ける。前者には既知の局所Kähler評価を適用する。後者の内部の正則な球について、エントロピーの小ささに線形な曲率評価を新たに示す。

Introductionによれば、標準束の切断と円錐関数を用いてスカラー曲率積分を二項に分ける。一方をBochner公式のRicci縮約で評価し、もう一方では平方根程度のL²誤差同士の積、正則補正、部分積分によって線形の小ささを回収する。最後にエントロピーの単調性とneckのpacking評価でスケールごとの寄与を足し合わせる。

## 原論文との対応

- **Abstractページ:** [An $L^1$ bound for Ricci curvature on Kähler manifolds](https://arxiv.org/abs/2610.28142)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.28142v1) — Section 1, pp. 2–3（Section 2直前まで）。
- **Introduction中で言及された主要結果:** Theorem 1.1。証明方針ではPropositions 3.1, 2.17の役割に言及。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.28142v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
