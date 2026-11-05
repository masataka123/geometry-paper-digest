---
layout: paper
title: Moduli spaces of rank 2 sheaves on $\mathbb P^3$ via Quot schemes
title_ja: 射影三次元空間の階数2安定層と相対Quotスキーム
authors: Charles Almeida, Nicolò Bignami, Marcos Jardim, Andrea T. Ricolfi
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the Gieseker--Maruyama moduli space $M_{c_3}$ of stable rank 2 torsion-free sheaves on $\mathbb{P}^3$ with Chern classes $c_1=-1$, $c_2=1$, and odd $c_3 \le 1$. Every such sheaf $E$ has reflexive hull $E^{\ast\ast}$ parametrised by $M_1$, and the quotient $E^{\ast\ast}/E$ is a 0-dimensional sheaf of length $n = (1-c_3)/2$. We prove that $M_{c_3}$ is isomorphic to the relative Quot scheme $\mathsf{Quot}_{\mathbb{P}^3 \times M_1/M_1}(\mathscr{R},n)$, where $\mathscr{R}$ is the universal reflexive sheaf over $M_1$. Our technique combines (i) Bridgeland-type wall-crossing in Donaldson--Thomas theory, (ii) the theory of good moduli spaces, (iii) deformation theory in dgla and Ext-quiver language. We deduce that $M_{c_3}$ is connected, and we analyse its \emph{smoothable component} $M_{c_3}^{\mathsf{main}}$, proving it is rational and generically smooth of dimension $4n+3$. We further prove that $\dim \mathrm{Sing} M_{c_3} \geq 4n-2$ for all $n \geq 2$. Finally, we provide
  a geometric characterisation for the cases $n\leq 2$. We show that $M_{-1}$ is a smooth rational projective variety of dimension 7 and compute its motive in the Grothendieck ring of varieties, while $M_{-3}$ is shown to be an integral, normal variety of dimension 11 that is regular in codimension 4.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
- chern-classes
- moduli
- singularities
arxiv_id: 2611.01961v1
arxiv_url: https://arxiv.org/abs/2611.01961
arxiv_submitted: '2026-11-01'
arxiv_updated: '2026-11-01'
summary: 第一・第二Chern類を固定した射影三次元空間上の階数2安定torsion-free層のモジュライを、普遍反射層の相対Quotスキームと同定する。連結性、主成分の有理性と次元、特異点集合の大きさを統一的に記述する。
abstract_en: ''
summary_en: The moduli spaces studied here vary the third Chern class while keeping the first two fixed. Each sheaf is related to a reflexive hull and a finite-length quotient, and the paper upgrades this correspondence to an isomorphism of schemes. This description controls connectedness and a distinguished smoothable component. The first two nontrivial quotient lengths also admit more complete geometric descriptions.
abstract_ja: 射影三次元空間上の階数2安定torsion-free層で、Chern類がc1=-1、c2=1、c3が1以下の奇数であるモジュライを調べる。反射包の普遍層からの長さ(1-c3)/2の商をパラメータ化する相対Quotスキームと同型であることを示す。モジュライ全体の連結性、滑らかに変形可能な主成分の有理性と一般点での滑らかさ、特異点集合の次元下界を得る。商の長さ1、2ではそれぞれ次元7の滑らかな有理射影多様体と、次元11の整かつ正規な射影多様体という詳しい記述を与える。
abstract_source_url: https://arxiv.org/abs/2611.01961
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.01961v1](https://arxiv.org/abs/2611.01961)
- **著者:** Charles Almeida, Nicolò Bignami, Marcos Jardim, Andrea T. Ricolfi
- **初回投稿日:** 2026-11-01
- **最終更新日:** 2026-11-01
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲面上の層のモジュライに比べ、三次元多様体では連結性や特異点、既約成分の構造が十分に分からない。本論文は射影三次元空間上の階数2層に対象を絞り、第三Chern類を動かす無限系列を一つの構成で記述する。

個々のtorsion-free層は、その反射包と零次元商の核として表せる。しかし点の対応だけではモジュライ空間の同型にならず、族と変形を含めて比較する必要がある。著者らは壁越え、good moduli space、変形理論を使って、この対応がスキームの同型であることを示す。

その結果、連結性だけでなく、零次元商を相異なる点へ変形できる主成分の次元・有理性や、特異点集合の下界も得られる。小さい商の長さでは全空間をより詳しく記述できる一方、すべての長さで全空間の既約性を主張するものではない。

## 背景と問題設定

$M\_{c\_3}$は$\mathbb P^3$上のGieseker安定な階数2 torsion-free層で$(c\_1,c\_2)=(-1,1)$、$c\_3\leq1$が奇数のもののfine moduli spaceとする。$n=(1-c\_3)/2$と置くと

$$
0\longrightarrow E\longrightarrow E^{\ast \ast }\longrightarrow Q\longrightarrow0,
\qquad\operatorname{length}Q=n
$$

である。$E^{\ast \ast }$は$N=M\_1$によりパラメータ化される反射層である。一般には平坦族の二重双対が平坦族になるとは限らず、この障害を越えて族全体の対応を構成することが核心となる。

## 主結果

### 相対Quotとの同型と連結性（Theorem A）

普遍反射層$\mathcal R$を用いて

$$
N=M\_1\simeq\mathbb P^3,\qquad
M\_{c\_3}\simeq\operatorname{Quot}\_{\mathbb P^3\times N/N}(\mathcal R,n)
$$

というスキーム同型を得る。自然な射$M\_{c\_3}\to N$はZariski局所自明で、平坦かつすべてのファイバーが互いに同型である。$M\_{c\_3}$は連結となり、その既約性は一つのファイバー$\operatorname{Quot}\_{\mathbb P^3}(R,n)$の既約性と同値になる。

### 主成分の幾何と特異点（Theorem B）

商$E^{\ast \ast }/E$が被約な長さ$n$の点集合の構造層となる開集合の閉包に、被約構造を入れたものを$M\_{c\_3}^{\mathrm{main}}$とする。奇数$c\_3\leq-1$に対し、これは有理で一般点で滑らかであり、

$$
\dim M\_{c\_3}^{\mathrm{main}}=5-2c\_3=4n+3
$$

となる。$n\geq2$では全モジュライの特異点集合に

$$
\dim\operatorname{Sing}M\_{c\_3}\geq4n-2
$$

という下界を与える。主成分の一般点が滑らかでも、全空間には大きな特異点集合が存在しうることを具体的に表す。

### 小さい長さの全空間（Theorem C）

$n=1$、すなわち$c\_3=-1$では$M\_{-1}$は次元7の滑らかな射影多様体であり、$\mathbb L=[\mathbb A^1]$として

$$
[M\_{-1}]=1+3\mathbb L+6\mathbb L^2+8\mathbb L^3+8\mathbb L^4+6\mathbb L^5+3\mathbb L^6+\mathbb L^7
$$

というGrothendieck環での式を得る。$n=2$では$M\_{-3}$は次元11の整射影多様体で、Cohen–Macaulay、余次元4で正則、かつ正規である。

## 証明の見取り図

DT/PT壁上のBridgeland半安定対象へ移すと、層$E$は反射包と商のシフトを合わせた対象$E^{\ast \ast }\oplus(E^{\ast \ast }/E)[-1]$へ対応する。そのgood moduli spaceを$N\times\operatorname{Sym}^n(\mathbb P^3)$と同定するために、微分次数付きLie代数とExt箙を用いて局所変形環と自己同型群の不変部分を比較する。

この同定から、二重双対を取る操作をモジュライ上の代数的な射として実現する。それを使って相対Quotからの全単射に逆射を作り、スキーム同型を得る。その後、Quot側の幾何を利用して連結性や主成分、小さい長さの場合を調べる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.01961)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.01961v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems A, B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.01961v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
