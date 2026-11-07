---
layout: paper
title: Holomorphic flexibility properties of strongly commuting varieties
title_ja: 強可換多様体の滑らかな部分におけるOka型柔軟性
authors: Stefano Giannini
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
- math.RT
arxiv_abstract: We study holomorphic flexibility properties of the strongly commuting variety of a complex semisimple algebraic group $G$. We prove that the smooth locus of the strongly commuting variety of $G$ is Oka-$1$. We also prove that the smooth locus of the commuting variety of a semisimple complex Lie algebra is Oka-$1$, and that it contains a Zariski dense open subset which is algebraically elliptic.
topic: several-complex-variables
tags:
- oka-theory
- complex-analytic-spaces
arxiv_id: 2611.05905v1
arxiv_url: https://arxiv.org/abs/2611.05905
arxiv_submitted: '2026-11-04'
arxiv_updated: '2026-11-04'
summary: 複素半単純群の強可換多様体と、半単純Lie代数の可換多様体の滑らかな部分についてOka-1性を示す。正則元の中心化群を使う局所パラメータ表示が鍵となり、Introductionでは最新の別の結果を用いた完全なOka性への強化も説明する。
abstract_en: We study holomorphic flexibility properties of the strongly commuting variety of a complex semisimple algebraic group $G$. We prove that the smooth locus of the strongly commuting variety of $G$ is Oka-$1$. We also prove that the smooth locus of the commuting variety of a semisimple complex Lie algebra is Oka-$1$, and that it contains a Zariski dense open subset which is algebraically elliptic.
summary_en: ''
abstract_ja: 複素半単純代数群の強可換多様体の滑らかな部分はOka-1である。また半単純複素Lie代数の可換多様体の滑らかな部分もOka-1であり、代数的にellipticなZariski稠密開部分を含む。正則元の中心化群の構造と局所的なspray近似性を用いて、特異な可換多様体から滑らかな部分の柔軟性を取り出す。Introductionは外部の最近の定理を適用して完全なOka性へ強化できることも述べる。
abstract_source_url: https://arxiv.org/abs/2611.05905
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.05905v1](https://arxiv.org/abs/2611.05905)
- **著者:** Stefano Giannini
- **初回投稿日:** 2026-11-04
- **最終更新日:** 2026-11-04
- **主分類・副分類:** math.CV（主分類）; math.AG, math.RT
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

群の元の可換な組やLie代数の可換な組は、表現多様体の基本的な例である。しかしそれらの空間は一般に特異であり、正則写像を豊富にもつという意味の柔軟性を、そのまま全体へ適用することはできない。本論文は滑らかな部分を取り出し、Oka理論からその柔軟性を調べる。

複素半単純群については、普遍被覆で可換な組へ持ち上がる「強可換」な組を扱う。その滑らかな部分はOka-1であり、開Riemann面からの連続写像を、近似・補間条件を伴って正則写像へ変形できる。半単純Lie代数の可換多様体についても同様の結論を得る。

証明の核心は、第一成分が正則元である部分を、柔軟な空間からの局所双正則写像で覆うことである。中心化群が連結とは限らないため、指数写像だけでは覆えず、群の元の冪と中心元を組み合わせる工夫が必要になる。

なお、主定理の表記はOka-1性であるが、Introductionは最近の別のプレプリントの結果を適用すると完全なOka性へ強化されることを明記している。この強化は本論文の構成と外部定理の組合せとして説明される。

## 背景と問題設定

複素半単純代数群 $G$ と半単純Lie代数 $\mathfrak g$ に対して、

$$
R(G)=\lbrace (x,y)\in G^2:xy=yx\rbrace ,\qquad
C(\mathfrak g)=\lbrace (x,y)\in\mathfrak g^2:[x,y]=0\rbrace
$$

を考える。普遍被覆 $q:\widetilde G\to G$ を使い、強可換多様体を

$$
R^{\mathrm{str}}(G)=(q\times q)\bigl(R(\widetilde G)\bigr)
$$

と定義する。$G$ が単連結なら $R^{\mathrm{str}}(G)=R(G)$ であるが、一般にはこの区別が必要となる。

Oka-1性は、正則写像への変形・近似・補間に関するOka性を、写像の定義域が開Riemann面の場合に制限した性質である。一般のStein定義域に対する完全なOka性と、定義上は区別される。

## 主結果

### 強可換多様体の滑らかな部分（Theorem 1）

任意の複素半単純代数群 $G$ に対し、$R^{\mathrm{str}}(G)\_{\mathrm{sm}}$ はOka-1である。従って、開Riemann面でパラメータ化された滑らかな強可換対の連続族は、適切な近似・補間条件を保ちながら正則族へ変形できる。

対象は滑らかな部分であり、特異点を含む多様体全体をOka多様体と呼んでいるわけではない。また非単連結群の全ての可換対について、強可換という条件を無条件に外してはいない。

### Lie代数の可換多様体（Theorem 2）

半単純複素Lie代数 $\mathfrak g$ に対し、$C(\mathfrak g)\_{\mathrm{sm}}$ はOka-1である。さらに $C(\mathfrak g)$ には代数的にellipticな稠密開部分が存在する。後者は、代数的なdominating sprayをもつ開部分が得られるという、具体的な柔軟性の構造である。

### 完全なOka性への強化（Introductionの “The full Oka property”）

Introductionは、最近の文献 [ADG+26] のTheorems 1.4と1.8を使うと、上の滑らかな部分が完全なOka性をもつことも導かれると述べる。局所パラメータ表示からstrong dominabilityを得て、それをOka性へ移し、さらに正の余次元の解析集合を越えて拡張する経路である。

同じ説明は、素数 $p$ に対する $\operatorname{PSL}\_p(\mathbb C)$ の可換多様体の滑らかな部分にも適用される。ここでは外部定理の証明を新たに検証したものではなく、本論文のIntroductionが明示する適用関係を紹介している。

## 証明の見取り図

単連結の場合、第一成分が正則元である開部分 $R\_{\mathrm{reg}}(G)$ を考える。その第一射影のファイバーは中心化群 $Z\_G(x)$ である。正則元の中心化群は可換だが非連結なことがあり、Lie代数からの指数写像は単位成分しか覆わない。

著者は中心化群の残る成分に、$x$ の冪と中心元を掛けて到達できることを示す。基本指標の微分を使うと、$r=\operatorname{rank}(G)$ として

$$
\Phi\_{(n,\varepsilon)}:G\_{\mathrm{reg}}\times\mathbb C^r\longrightarrow R\_{\mathrm{reg}}(G),
\qquad (n,\varepsilon)\in\mathbb Z\times Z(G)
$$

という局所双正則写像の族が得られ、その像が正則部分を覆う。源の柔軟性から局所spray近似性を移し、正の余次元の補集合を扱う既存の判定を適用して滑らかな部分全体のOka-1性を得る。

一般の半単純群では普遍被覆から強可換多様体へこの性質を移す。Lie代数の場合にも対応する構成を行う。全体を単一の等質空間と見なすのではなく、正則部分の局所表示と補集合の扱いを組み合わせる点が方法の特徴である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.05905)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.05905v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1, 2; §1 “The full Oka property”
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.05905v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
