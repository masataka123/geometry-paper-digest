---
layout: paper
title: Slope zero tensors, uniformizing variations of Hodge structure and quotients of tube domains
title_ja: 傾斜零テンソルと一意化Hodge構造による特異多様体の管状領域一意化
authors: Patrick Graf, Aryaman Patel
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: We prove an equivalence between two approaches to characterizing complex-projective varieties $X$ with klt singularities and ample canonical divisor that are uniformized by bounded symmetric domains. In order to do so, we show how to construct a uniformizing variation of Hodge structure from a slope zero tensor and vice versa. As a consequence, we generalize various uniformization results of Catanese and Di Scala to the singular setting. For example, we prove that $X$ is a quotient of a bounded symmetric domain of tube type by a group acting properly discontinuously and freely in codimension one if and only if $X$ admits a slope zero tensor. As a key step in the proof, we establish the compactness of the holonomy group of the singular K\"{a}hler--Einstein metric on $X_{\mathrm{reg}}$.
topic: algebraic-geometry
tags:
- uniformization
- hodge-theory
- singularities
- kahler-einstein-metrics
- vector-bundles-sheaves
arxiv_id: 2510.15039v1
arxiv_url: https://arxiv.org/abs/2510.15039
arxiv_submitted: '2025-10-16'
arxiv_updated: '2025-10-16'
summary: 標準因子が豊富な射影klt多様体について、正則テンソルによる一意化判定と一意化Hodge構造の変動による判定を直接結び付ける。特異Kähler–Einstein計量の全ホロノミー群のコンパクト性を示し、管状型有界対称領域の商を特徴付ける既存の滑らかな場合の結果を拡張する。
abstract_en: ''
summary_en: The paper compares tensor and Hodge-theoretic criteria for uniformization of canonically polarized klt varieties. Its constructions connect the two kinds of data on the smooth locus without first identifying a universal cover. Compactness of the full holonomy group supplies a missing step in carrying these criteria to singular spaces. The resulting quotient characterizations include bounded symmetric domains of tube type.
abstract_ja: 本論文は、正則テンソルと一意化Hodge構造の変動という二つの一意化の道具を、普遍被覆を経由せずに相互に構成する。対象はklt特異点を持ち標準因子が豊富な正規射影多様体である。管状型有界対称領域の余次元一で自由な商と傾斜零テンソルの存在との同値を含む判定を得る。そのために、正則部分上の特異Kähler–Einstein計量の全ホロノミー群がコンパクトであることを証明する。
abstract_source_url: https://arxiv.org/abs/2510.15039
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.15039v1](https://arxiv.org/abs/2510.15039)
- **著者:** Patrick Graf, Aryaman Patel
- **初回投稿日:** 2025-10-16
- **最終更新日:** 2025-10-16
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有界対称領域で一意化される射影多様体を代数的・微分幾何的なデータで認識する方法には、SimpsonのHodge理論的な方法とCatanese–Di Scalaの正則テンソルを使う方法がある。既知の一意化定理を介せば両者は結び付くが、テンソルからHodge構造を直接作るという対応は別の問題である。

本論文は、標準因子が豊富でklt特異点を持つ正規射影多様体に対し、この直接対応を構成する。結果として、管状型有界対称領域の商を傾斜零テンソルで特徴付けるなど、滑らかな多様体に対する既知の判定を特異な対象へ拡張する。

技術的な要は、特異Kähler–Einstein計量の全ホロノミー群のコンパクト性である。正則部分は一般に非コンパクトで計量も完備とは限らないため、コンパクトな局所対称空間の議論をそのまま使うことはできない。本論文はこの点を処理して有限quasi-étale被覆上でホロノミーを連結にする。

## 背景と問題設定

以下の主定理に共通する仮定は、$X$ が $n$ 次元正規射影多様体で、klt特異点を持ち、$K\_X$ が豊富であることである。$X\_{\mathrm{reg}}$ はその正則部分を表す。

Simpsonの方法では、接束の構造群の縮約と領域に応じたChern類の等式が一意化Hodge構造の変動（uVHS）につながる。一方、テンソルによる方法は接空間上の特徴錐の形を読み取る。本論文の新規性は、普遍被覆を中継して二つの存在条件を同一視するだけでなく、両者のデータを相互に作る点にある。

## 主結果

### 主定理1：管状型の商と傾斜零テンソル（Theorem 1.2）

共通の仮定の下で、$X$ に傾斜零テンソルが存在することと、

$$
X\simeq D/\Gamma
$$

と書けることは同値である。ここで $D$ は管状型有界対称領域、$\Gamma\subset\operatorname{Aut}(D)$ は離散かつ余コンパクトで、作用は余次元一で自由である。全点で自由と要求しないことが特異点を許す商の記述に対応する。

傾斜零テンソルは論文の特定のテンソル条件を意味し、任意の次数零のテンソルでよいという主張ではない。Introductionではその厳密な定義をTheorem 2.11に委ねているため、ここでは定義式を推測しない。

### semispecialテンソルによる精密化（Theorem 1.1）

semispecialテンソルの存在は、上の商表示において

$$
D=D\_1\times\cdots\times D\_m,\qquad \operatorname{rk}D\_i\mid\dim D\_i
$$

を満たす管状型因子の積を使えることと同値である。群の離散性、余コンパクト性、余次元一での自由性は同じである。semispecialという語もTheorem 2.10で規定される条件を指す。

### 高次元球因子を除くテンソル判定（Theorem 1.3）

複素次元二以上の単位球を既約因子に持たない有界対称領域の商であることは、

$$
\sigma\in H^0\bigl(X\_{\mathrm{reg}},\operatorname{End}(T\_{X\_{\mathrm{reg}}}\otimes\Omega^1\_{X\_{\mathrm{reg}}})\bigr)
$$

に属するテンソルで、次の特徴錐条件を満たすものの存在と同値である。これはIntroductionに書かれた反射的テンソル層の大域切断を正則部分で表した式である。

ある点 $p$ の接空間が $T=T'\_1\oplus\cdots\oplus T'\_m$ と分解し、$\sigma\_p$ の第一Mok特徴錐 $CS$ は $T$ 全体でなく、ちょうど $m$ 個の既約成分を持つ。各成分は

$$
CS'(j)=T'\_1\times\cdots\times CS'\_j\times\cdots\times T'\_m
$$

の形であり、$CS'\_j$ は $T'\_j$ を張る滑らかな射影多様体上の錐である。ただし $CS'\_j=\lbrace 0\rbrace $ かつ $\dim T'\_j=1$ の場合を許す。第一Mok特徴錐の定義自体はIntroductionが参照するTheorem 2.12による。

### uVHSとの直接対応（Theorem 1.4）

上の三つの特徴錐条件を満たすテンソルの存在は、$X\_{\mathrm{reg}}$ にHermitian型Hodge群 $G\_0$ に対するuVHSが存在し、そのLie環 $\mathfrak g\_0$ が $p\geq2$ に対する $\mathfrak{su}(p,1)$ 因子を持たないことと同値である。この除外が高次元の球因子の除外に対応する。商としての一意化は、この直接構成と既存のuVHSの一意化定理を組み合わせて得る。

### 全ホロノミーのコンパクト性（Theorem 1.5）

共通の仮定の下で、$(X\_{\mathrm{reg}},\omega\_{\mathrm{KE}})$ の全ホロノミー群 $H$ はコンパクトである。さらに有限quasi-étale Galois被覆 $Y\to X$ があり、$Y\_{\mathrm{reg}}$ のKähler–Einstein計量のホロノミー群は連結になる。

制限ホロノミー群の情報だけでは接束の構造群の縮約を十分に制御できない。全群の成分が無限個になり得るという問題を取り除く点が、この定理の役割である。

## 証明の見取り図

まずホロノミー被覆を取り、全ホロノミーを連結にする。Bochner原理でテンソルを用いると、各既約ホロノミー因子が適切な有界対称領域のものと同定される。

次に接束のフレーム束内の主 $H$ 束を複素化し、Hodge束の一意化系を構成する。元のホロノミー束がこの系の計量を与え、uVHSを得る。逆方向にはuVHSから要求されるテンソルを構成する。Introductionはこの五段階を説明しており、後続節の証明をここで再構成してはいない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2510.15039)
- **Introduction:** [PDF](https://arxiv.org/pdf/2510.15039v1) — Section 1, pp. 1–4（Section 2開始前）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2510.15039v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
