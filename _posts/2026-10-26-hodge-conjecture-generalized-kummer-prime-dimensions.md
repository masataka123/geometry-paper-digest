---
layout: paper
title: On the Hodge conjecture for hyper-Kähler varieties of generalized Kummer type of dimension divisible by four
title_ja: 一般化Kummer型多様体のHodge予想と中間Jacobianによるモチーフ
authors: Salvatore Floccari, Lie Fu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove the Hodge conjecture for all hyper-K\"ahler varieties of generalized Kummer type of dimension $2n$ with $n+1$ a prime number, and all powers of these varieties. For any variety $X$ of generalized Kummer type of dimension divisible by 4, we show that the Lefschetz standard conjecture for $X$ implies the Hodge conjecture for $X$ and all its powers.
topic: algebraic-geometry
tags:
- hodge-theory
- hyperkahler-geometry
- algebraic-cycles-enumerative
arxiv_id: 2610.31740v1
arxiv_url: https://arxiv.org/abs/2610.31740
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: 複素次元2nの一般化Kummer型多様体について、n+1が素数ならその全直積冪にHodge予想が成立することを証明する。一般の偶数nについてはLefschetz標準予想を仮定して同じ結論を得る。中心となるのは、有理係数ホモロジカル・モチーフが第3中間Jacobianから生成されるという結果である。
abstract_en: ''
summary_en: The paper connects generalized Kummer varieties to their third intermediate Jacobians at the level of homological motives. When the half-dimension plus one is prime, this connection proves the Hodge conjecture for the variety and every power. For other dimensions divisible by four, the same conclusion is conditional on the Lefschetz standard conjecture. The results extend the previously known deformation types to infinitely many additional dimensions.
abstract_ja: 一般化Kummer型のhyper-Kähler多様体のHodge予想を研究する。複素次元を2nとし、n+1が素数なら、多様体とその任意の直積冪についてHodge予想を証明する。nが偶数である一般の場合には、Lefschetz標準予想を仮定して同じ結論を得る。証明の中心は、その有理係数ホモロジカル・モチーフが第3中間Jacobianのモチーフから生成されることを示す点にある。
abstract_source_url: https://arxiv.org/abs/2610.31740
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31740v1](https://arxiv.org/abs/2610.31740)
- **著者:** Salvatore Floccari, Lie Fu
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

hyper-Kähler多様体の第2コホモロジーはKuga–Satake構成によりアーベル多様体のHodge構造と結びつく。問題は、この関係をHodge構造の抽象的な関係にとどめず、代数的対応によるモチーフの関係へ持ち上げられるかという点にある。本論文は一般化Kummer型でこの問題を研究する。

複素次元 $2n$ で $n+1$ が素数の場合、対象のホモロジカル・モチーフが第3中間Jacobianから生成されることを証明する。このJacobianとその全直積冪について既知のHodge予想を使い、元の多様体とその全直積冪にHodge予想を導く。

一般の偶数 $n$ に対しても、Lefschetz標準予想を仮定すれば同じ結論を得る。Introductionはこの仮定を除く可能性を議論するが、無条件に証明済みとはしていない。従って、素数条件での無条件の結果と、4で割り切れる一般次元での条件付き結果を区別する必要がある。

## 背景と問題設定

射影的hyper-Kähler多様体 $X$ に付随するKuga–Satakeアーベル多様体には、Hodge構造の埋め込み

$$
H^2(X,\mathbb Q)\hookrightarrow H^2(\operatorname{KS}(X)^2,\mathbb Q)
$$

がある。Introductionは、全コホモロジーのHodge構造もこのアーベル多様体が生成するテンソル圏に属するという背景を説明する。しかし、対応するモチーフの包含は代数的サイクルの存在を要する別の問題である。

一般化Kummer型の $K$ ではKuga–Satake多様体が、第3中間Jacobian $J$ の冪と同種になる。$J$ は判別式が自明なWeil型のアーベル四次元多様体である。論文で「$J$ によってmotivated」とは、$h(K)$ が $h(J)$ の生成する厚いテンソル部分圏に属することをいう。ここで扱うのは有理係数のホモロジカル・モチーフであり、より強いChowモチーフ版を証明したとは述べていない。

## 主結果

### 素数条件でのモチーフの生成（Theorem 1.2）

$n\ge2$、$n+1$ が素数で、$K$ が複素次元 $2n$ の $\operatorname{Kum}\_n$ 型hyper-Kähler多様体なら、第3中間Jacobian $J$ に対して

$$
h(K)\in\langle h(J)\rangle\_{\mathrm{Mot}}^{\otimes}
$$

が成り立つ。第2コホモロジーだけの代数的対応から、全ホモロジカル・モチーフを制御する主張へ進む点が主結果である。

### 全直積冪に対するHodge予想（Corollary 1.3）

同じ素数条件の下で、$K$ と任意の正の整数 $m$ に対する $K^m$ にHodge予想が成立する。Introductionは、従来すべてのメンバーで知られていた一般化Kummer型の次元4と6に対し、無限に多くの次元へ成立範囲を拡張すると位置づける。次元6は $n+1=4$ なので今回の素数条件には含まれないが、既存の別結果で扱われている。

### 次元が4で割り切れる場合の条件付き結果（Theorem 1.4）

$n\ge2$ が偶数の場合、$K$ に対するLefschetz標準予想を仮定すれば、同じモチーフの包含と $K$ の全直積冪に対するHodge予想を得る。著者らは半正則性に関する他の研究が標準予想の仮定を解消する可能性を述べるが、本定理の段階ではその条件を保持する。

### Tate予想への帰結（Remark 1.6）

$K$ が $\mathbb Q$ 上有限生成な体に定義され、上のモチーフの結論を満たす場合、全直積冪のTate予想にも帰結を得る。Introductionでは、既知のMumford–Tate予想と、アーベル多様体によって生成されるモチーフに関する結果を組み合わせることで説明される。

## 議論の位置づけ

Introductionが強調する素数条件の役割は、コホモロジーの分解が簡単になることと、必要な標準予想がその範囲では既に証明されていることにある。$n+1$ の約数構造が複雑になると追加のコホモロジー成分が現れ、一般の場合の議論が難しくなる。証明の詳細な見取り図は原論文のSection 2に分けられており、本記事はSection 1で説明された位置づけと主張に範囲を限る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31740)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31740v1) — Section 1, pp. 2–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.2, Corollary 1.3, Theorem 1.4、Remarks 1.5–1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31740v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
