---
layout: paper
title: "Regulators of canonical extensions are torsion:the case of two transversally intersecting smooth divisors"
title_ja: "二つの横断的な滑らかな因子に対する標準延長のレギュレーターの捩れ性"
authors: "Jaya NN Iyer, Carlos Simpson"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - algebraic-cycles-enumerative
arxiv_id: "2608.11856v1"
arxiv_url: "https://arxiv.org/abs/2608.11856"
arxiv_submitted: "2026-08-12"
arxiv_updated: "2026-08-12"
summary: >-
  二つの滑らかな成分が横断的に交わる境界をもつ複素多様体上で、無限遠のモノドロミーが冪単な平坦束の Deligne 標準延長を研究する。二重フィルトレーションと二変数の cubical 変形を用い、次数 $p\geq2$ の拡張レギュレーター類が捩れであることを証明する。
abstract_en: >-
  This note extends the main result of \cite{IS} 2007 --- torsion of the extended Chern--Simons (regulator) classes of the Deligne canonical extension of a flat bundle with unipotent monodromy at infinity --- from the case of a smooth irreducible boundary divisor to the case of a boundary divisor $D = D_1\cup D_2$ with two smooth irreducible components meeting transversally along a smooth center $Z=D_1\cap D_2$. Let $X$ be a smooth projective variety defined over $\mathbb{C}$, and $U:=X-D$. Given a flat bundle $(E,\nabla)$ on $U$ with unipotent monodromy around the components of $D$ consider Deligne's canonical extension $(\overline{E},\overline{\nabla})$ on $X$. Then the extended Chern-Simons classes $$ c_p(\overline{E},\overline{\nabla})\in H^{2p-1}(X,\mathbb{C}/\mathbb{Z}) $$ are torsion, for $p\geq 2$. These notes were prepared in 2009-2010, and the preprint \cite[2026]{IS2} treats the full normal crossing case via a different approach.
summary_en: ""
abstract_ja: >-
  本論文は、無限遠で冪単モノドロミーをもつ平坦束の Deligne 標準延長について、拡張 Chern–Simons（レギュレーター）類が捩れになるという先行結果を拡張する。従来の滑らかな既約境界に代えて、二つの滑らかな既約成分 $D_1,D_2$ が滑らかな中心 $Z=D_1\cap D_2$ に沿って横断的に交わる境界 $D=D_1\cup D_2$ を扱う。複素滑らかな射影多様体 $X$、$U=X-D$ と、$U$ 上の該当する平坦束の標準延長に対し、$p\geq2$ の拡張 Chern–Simons 類が捩れであることを示す。
abstract_source_url: "https://arxiv.org/abs/2608.11856"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.11856](https://arxiv.org/abs/2608.11856)
- **著者:** Jaya NN Iyer, Carlos Simpson
- **初回投稿日:** 2026年8月12日
- **最終更新日:** 2026年8月12日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

平坦ベクトル束をコンパクト化の境界を越えて延長するとき、接続は一般に対数極をもつ。Deligne の標準延長に付随する Chern–Simons 類がどの程度非自明になり得るかは、平坦束のレギュレーターと代数的 Chern 類を結ぶ問題である。

先行研究は境界が一つの滑らかな既約因子の場合に、高次の拡張レギュレーター類が捩れになることを示していた。本論文は、境界 $D=D_1\cup D_2$ の二成分が滑らかな中心に沿って横断的に交わる最初の角付きの場合へ結果を進める。

主定理は、二つの境界ループのモノドロミーが冪単である表現 $\rho$ に対して、通常の Chern–Simons 類を延長する標準的な類 $\widehat c_p(\rho/X)$ を構成し、$p\geq2$ ではそれが捩れであると述べる。$X$ が射影的なら、この類は Deligne Chern 類を持ち上げるため、対応する Deligne Chern 類も捩れになる。

技術的な新規性は、交差部分で二つのモノドロミー・フィルトレーションを一つへ無理に細分するのではなく、組として保持する点にある。二重次数付き分解と二変数の cubical homotopy を用いることで、従来法の共通細分条件と曲率の余次元論法が二成分の角で破綻する問題を回避する。

## 背景と問題設定

$X$ を複素数体上の滑らかな準射影多様体、$D_1,D_2$ を滑らかで横断的に交わる因子、$U=X-(D_1\cup D_2)$ とする。表現

$$
\rho:\pi_1(U)\longrightarrow\operatorname{GL}_r(\mathbb C)
$$

について、各 $D_i$ を一周するループ $\gamma_i$ の像 $\rho(\gamma_i)$ が冪単であると仮定する。対応する平坦束 $(E,\nabla)$ は $X$ 上の Deligne 標準延長 $(\overline E,\overline\nabla)$ をもち、その接続は $D_1,D_2$ に沿って冪零留数をもつ対数接続となる。

交差中心 $Z=D_1\cap D_2$ では、冪零作用素 $N_i=\log\rho(\gamma_i)$ から二つのフィルトレーション $W^{(1)},W^{(2)}$ が現れる。一般には両者の共通細分は存在せず、二変数 collar 上では曲率の外積が余次元だけから消えるとも限らない。この二点が、滑らかな一成分境界の議論をそのまま移せない理由である。

## 主結果

### 主定理（Theorem 1.1）

Introduction の設定の下で、各 $p\geq1$ に対し標準的な拡張レギュレーター類

$$
\widehat c_p(\rho/X)\in H^{2p-1}(X,\mathbb C/\mathbb Z)
$$

が存在する。これは $U$ 上で $(E,\nabla)$ の通常の Chern–Simons 類に制限され、$\rho$ に関して加法的で、対 $(X,D)$ に関して反変的に関手的であり、無限遠で冪単性を保つ $\rho$ の変形に対して剛性をもつ。

そのうえで、$p\geq2$ なら $\widehat c_p(\rho/X)$ は捩れである。さらに $X$ が射影的なら、この類は Deligne 標準延長の Deligne Chern 類

$$
c_p^D(\overline E)\in H_D^{2p}(X,\mathbb Z(p))
$$

を持ち上げるので、$c_p^D(\overline E)$ も $p\geq2$ で捩れとなる。二成分が交差する場合にも、平坦性に由来する高次 Chern 類の強い消滅的性質が保持されることを示す結果である。

## 証明の見取り図

第一の工夫は、角 $Z$ の近くで $W^{(1)}$ と $W^{(2)}$ を同時に細分する代わりに、二重フィルトレーションとして扱うことである。二つのフィルトレーションは同時分裂をもち、二重随伴次数付き上で平坦な接続を保つように patched connection を構成できる。この接続の曲率は全次数を真に下げる三角的な形となり、すべての Chern 形式が恒等的に消える。

第二の工夫は、二変数変形空間 $BGL(F[t_1,t_2])^+$ を角にもつ cubical homotopy pushout である。同時二重次数付き分解に付随する共役変形を選ぶと、$dt_i$ を含む曲率項もフィルトレーションに関して狭義三角的になる。その後、Hermitian $K$ 理論、複素 Hodge 構造の変動に対するレギュレーターの消滅、Mochizuki の定理と Reznikov の議論を組み合わせて捩れ性へ到達する。

Introduction は、この二重フィルトレーション法が二成分の角に特有であり、三つのフィルトレーションには一般に同時分裂がないため三重点へ直接は延びないことも明記している。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.11856](https://arxiv.org/abs/2608.11856)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** pp. 1–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
