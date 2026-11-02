---
layout: paper
title: Semispecial tensors and quotients of the polydisc
title_ja: 半特殊テンソルによる特異多重円板商の特徴づけ
authors: Patrick Graf, Aryaman Patel
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: Let $X$ be a complex-projective variety with klt singularities and ample canonical divisor. We prove that $X$ is a quotient of the polydisc by a group acting properly discontinuously and freely in codimension one if and only if $X$ admits a semispecial tensor with reduced hypersurface. This extends a result of Catanese and Di Scala to singular spaces, and answers a question raised by these authors. As a key step in the proof, we establish the Bochner principle for holomorphic tensors on klt spaces in the negative K\"{a}hler--Einstein case.
topic: algebraic-geometry
tags:
- uniformization
- singularities
- kahler-einstein-metrics
- vector-bundles-sheaves
arxiv_id: 2505.03904v2
arxiv_url: https://arxiv.org/abs/2505.03904
arxiv_submitted: '2025-05-06'
arxiv_updated: '2026-05-06'
summary: 豊富な標準因子を持つklt射影多様体が多重円板の商となる条件を、半特殊テンソルで特徴づける。負の特異Kähler–Einstein計量に関するBochner原理を確立し、一般型多様体の標準モデルや共役多様体にも応用する。
abstract_en: ''
summary_en: The paper asks whether a tensor criterion for polydisc uniformization survives on singular canonical models. For projective klt spaces with ample canonical divisor, the answer is affirmative when the tensor defines a reduced hypersurface at a regular point. A negative Kähler–Einstein version of the Bochner principle supplies the link to holonomy. Further consequences concern canonical models, field conjugates, and dimensions at most three.
abstract_ja: 滑らかな多様体について知られたテンソルによる一意化判定を、klt特異点を持つ射影多様体へ拡張する。標準因子が豊富な場合、ある正則点で被約な超曲面を定める半特殊テンソルの存在が、余次元1で自由に作用する離散群による多重円板商であることと同値になる。証明の主要な道具は、負のKähler–Einstein計量に関する特異空間上のBochner原理である。
abstract_source_url: https://arxiv.org/abs/2505.03904
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.03904v2](https://arxiv.org/abs/2505.03904)
- **著者:** Patrick Graf, Aryaman Patel
- **初回投稿日:** 2025-05-06
- **最終更新日:** 2026-05-06
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

多重円板を普遍被覆に持つ滑らかな射影多様体は、適切な正則テンソルの存在から認識できる。ところが一般型多様体の標準モデルには特異点が現れるため、滑らかな場合の判定をそのまま適用できない。本論文はこの隔たりを埋める。

主定理は、標準因子が豊富なklt射影多様体を対象に、半特殊テンソルと多重円板商の同値を示す。特異空間では「通常の普遍被覆が多重円板」という形より、群作用が余次元1で自由な商という形で定式化することが適切となる。

解析的な核は、負の特異Kähler–Einstein計量に関するBochner原理である。テンソルの平行性を通じてホロノミーへ結びつけ、標準モデルや体の自己同型による共役にも適用する。次元3以下では、テンソルが定める超曲面の被約性を仮定しなくても特徴づけが得られる。

## 背景と問題設定

滑らかな $n$ 次元多様体の半特殊テンソルは、$\eta^{\otimes2}\simeq\mathcal O\_X$ となる線束を用いた非零切断

$$
\psi\in H^0\bigl(X,\operatorname{Sym}^n\Omega\_X^1\otimes\mathcal O\_X(-K\_X)\otimes\eta\bigr)\setminus\lbrace 0\rbrace
$$

として記述される。各正則点では接空間上の斉次多項式となり、$\lbrace \psi\_p=0\rbrace \subset\mathbb P(T\_pX)$ の被約性を考えられる。特異空間上の定義はこの記述を正規多様体へ拡張したものであり、Introductionは詳しい定義をTheorem 3.1へ委ねている。

## 主結果

### 特異多重円板商の判定（Theorem A）

$X$ を $n$ 次元正規射影多様体とし、klt特異点を持ち $K\_X$ が豊富であるとする。このとき次の条件は同値である。

1. $X\simeq\mathbb H^n/\Gamma$ であり、$\Gamma\subset\operatorname{Aut}(\mathbb H^n)$ は離散余コンパクト群で、作用が余次元1で自由である。
2. 半特殊テンソル $\psi$ が存在し、ある $p\in X\_{\mathrm{reg}}$ で $\lbrace \psi\_p=0\rbrace \subset\mathbb P(T\_pX)$ がスキームとして被約である。

$\mathbb H^n$ は多重円板を表す。全点での自由作用を要求せず、特異点を許す商を捉える点が滑らかな場合からの拡張である。

### 負のKähler–Einstein計量のBochner原理（Theorem B）

同じ仮定の $X$ と既知の特異Kähler–Einstein計量 $\omega\_{\mathrm{KE}}$ を考える。正則部分上のテンソル

$$
\tau\in H^0\bigl(X\_{\mathrm{reg}},T\_{X\_{\mathrm{reg}}}^{\otimes p}\otimes\Omega\_{X\_{\mathrm{reg}}}^{\otimes q}\bigr)
$$

について、$p=q$ なら $\tau$ は $\omega\_{\mathrm{KE}}$ に関して平行であり、$p>q$ なら $\tau=0$ である。後者は既知の接層の半安定性からも従い、一意化への応用で特に必要なのは前者である。

### 一般型の標準モデル（Corollary 1.3）

滑らかな一般型射影多様体 $X$ が半特殊テンソルを持ち、ある点で多項式として非零かつ対応超曲面が被約なら、標準モデル $X\_{\mathrm{can}}$ は上記の意味の多重円板商である。$X$ 自体の普遍被覆が多重円板であるとは主張していない。

### 共役と低次元の場合（Corollaries 1.4, 1.5）

多重円板商となる射影多様体は、任意の $\sigma\in\operatorname{Aut}(\mathbb C/\mathbb Q)$ による共役 $X^\sigma$ も同じ意味の多重円板商となる。

また、kltかつ $K\_X$ が豊富という仮定のもと、$n\leq3$ なら半特殊テンソルの存在だけで多重円板商を特徴づけられる。この低次元の系では被約性を追加しなくてよい。

## 証明の見取り図

Bochner原理は正則テンソルを平行テンソルへ変え、ホロノミーに関する制約を与える。Ricci平坦な特異空間に対する先行研究とは異なり、負曲率側のホロノミーの連結成分は半単純とは限らない。著者らはその違いを避ける解析的な方針を採り、Ricciテンソルの形に由来する追加の議論を行う。

この特異版Bochner原理を、Catanese–Di Scala型のテンソル判定と組み合わせて商の特徴づけに進む。Introductionは他の有界対称領域への一般化を将来の課題として残し、本論文の中心を多重円板に限定する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2505.03904)
- **Introduction:** [PDF](https://arxiv.org/pdf/2505.03904v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems A, B; Corollaries 1.3–1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2505.03904v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
