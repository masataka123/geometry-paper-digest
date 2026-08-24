---
layout: paper
title: "Mok tensors and Orbifold Quotients of Bounded symmetric domains without ball factors"
title_ja: "Mokテンソルと球因子をもたない有界対称領域のオービフォールド商"
authors: "Fabrizio Catanese, Marco Franciosi"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this paper we characterize the compact orbifolds, quotients $ X = \mathcal{D}/ Γ$ of a bounded symmetric domain $\mathcal{D}$ with no higher dimensional ball factor by the action of a discontinuous group $Γ$, as those projective orbifolds with ample orbifold canonical divisor which admit a Mok curvature type tensor of orbifold type and satisfying certain other conditions implying the existence of a finite smooth covering.
topic: algebraic-geometry
tags:
  - uniformization
  - curvature
  - singularities
  - fundamental-groups
arxiv_id: "2602.01980v1"
arxiv_url: "https://arxiv.org/abs/2602.01980"
arxiv_submitted: "2026-02-02"
arxiv_updated: "2026-02-02"
summary: >-
  高次元球因子をもたない有界対称領域のコンパクトオービフォールド商を、豊富なオービフォールド標準因子とMok曲率型テンソルから特徴付ける。有限指数のtorsion-free部分群や局所被覆の条件を組み合わせ、Deligne–Mostowおよびkltオービフォールドに対する一意化判定を与える。
abstract_en: ""
summary_en: >-
  This work gives intrinsic criteria for a compact projective orbifold to be uniformized by a bounded symmetric domain having no higher-dimensional ball factor. The characterization combines positivity of the orbifold canonical divisor with a curvature-type tensor introduced by Mok and conditions on finite orbifold coverings. Variants address Deligne–Mostow orbifolds and klt pairs, linking algebraic classification data to the universal covering domain.
abstract_ja: >-
  高次元球因子を含まない有界対称領域 $\mathcal D$ の不連続群によるコンパクト商 $X=\mathcal D/\Gamma$ を特徴付ける。オービフォールド標準因子が豊富で、オービフォールド型のMok曲率型テンソルをもち、有限な滑らかな被覆の存在を保証する追加条件を満たす射影オービフォールドが、ちょうどそのような商となる。
abstract_source_url: "https://arxiv.org/abs/2602.01980"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.01980](https://arxiv.org/abs/2602.01980)
- **著者:** Fabrizio Catanese, Marco Franciosi
- **初回投稿日・最終更新日:** 2026年2月2日（v1）
- **主分類・副分類:** math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト複素空間が有界対称領域の商として得られるかを、商表示をあらかじめ与えずに判定する一意化問題を扱う。対象は既存のtube typeの場合より広い、高次元球を既約因子にもたない領域である。

分岐因子を係数付きで記録したオービフォールド $(X,D)$ を用い、標準因子 $K_X+D$ の豊富性とMok曲率型正則テンソルを主要な内在的データとする。さらにオービフォールド基本群の有限指数部分群が与える被覆の滑らかさを制御する。

主結果は一般のglobal compact orbifold、Deligne–Mostow orbifold、およびklt orbifoldに応じた複数の特徴付けである。特にkltの場合、指定された三条件が有界対称領域による普遍被覆と同値になる。

## 背景と問題設定

$D=\sum_i(1-1/m_i)D_i$ とおき、オービフォールド標準因子を

$$
K_{\mathcal X}=K_X+D=K_X+\sum_i\frac{m_i-1}{m_i}D_i
$$

とする。Mok tensorは接空間上の曲率型endomorphismであり、そのkernelとrank-one tensorの交わりから得るcharacteristic varietyが、有界対称領域の既約因子の型を検出する。

## 主結果

### 一般のglobal compact orbifoldの特徴付け（Theorem 1）

高次元球因子をもたない有界対称領域のglobal compact orbifold商は、次の条件を満たす射影複素オービフォールドとして特徴付けられる。$K_{\mathcal X}$ がampleで、

$$
\sigma_{\mathcal X}\in\Omega_X^1(\log\lceil D\rceil)^{\otimes2}\otimes T_X^{\otimes2}
$$

というオービフォールド型Mok tensorが存在し、オービフォールド基本群が有限指数のtorsion-free正規部分群をもつ。対応する有限Galois被覆は、滑らかであるか、Introductionに記された2-homological connectednessを満たす特異点をもつ。

### Deligne–Mostowの場合（Theorems 2, 3）

Deligne–Mostow orbifoldと仮定すると、有限被覆側の条件を簡略化した特徴付けが得られる。別の定式化では、基本群のresidual finitenessと、滑らかでreducedなorbifold universal coverをもつclassifying-space条件を課す。

### klt orbifoldの一意化（Theorem 4）

$(X,D)$ がkltなら、普遍オービフォールド被覆が高次元球因子をもたない有界対称領域であることは、Theorem 1の条件 (1)–(3)、すなわち標準因子の豊富性、Mok tensor、適切な有限平滑被覆の存在と同値である。reducedの場合には、滑らかな $X$ に対する従来の $K_X$ ample仮定を、minimal model上のbigかつnefという状況へ広げる。

## 証明の見取り図

有限の滑らかなオービフォールド被覆へ移り、Mok tensorを被覆上の曲率型テンソルとして扱う。Kähler–Einstein orbifold metricとBochner型の議論によりテンソルを平行化し、そのcharacteristic varietiesからholonomyの既約分解を読み取る。kltの場合はquasi-étale被覆と既知のuniformizing variation of Hodge structureの結果を用いて、内在的条件から普遍被覆を復元する。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.01980](https://arxiv.org/abs/2602.01980)
- **Introduction:** unnumbered Introduction, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
