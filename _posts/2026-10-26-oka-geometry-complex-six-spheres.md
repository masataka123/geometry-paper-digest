---
layout: paper
title: Oka Geometry of Complex Six-Spheres
title_ja: 複素六次元球面のOka性と点の除去・爆発
authors: Yun-Heng Du, Bin Guo, Yuta Kusakabe, Song-Yan Xie
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: Alp\"oge constructed a complex structure on $S^6$ through a torus fibration with exactly three special fibres. We prove that every member of the associated admissible period family is Oka and that the family projection over each relatively compact parameter disc is an Oka map. The Oka property survives the deletion or simultaneous blow-up of any finite set of distinct points in any member. Blowing up a single point therefore produces an Oka complex manifold diffeomorphic, but not biholomorphic, to $\mathbb{P}^3$. The proofs combine explicit cyclic coverings with analytic extension and the invariance of the Oka property under holomorphic coverings.
topic: several-complex-variables
tags:
- oka-theory
- moduli
- complex-analytic-spaces
arxiv_id: 2610.00250v2
arxiv_url: https://arxiv.org/abs/2610.00250
arxiv_submitted: '2026-09-23'
arxiv_updated: '2026-10-23'
summary: Alpögeの構成に由来する複素六次元球面の許容周期族について、各多様体のOka性と、相対コンパクトなパラメータ円板上の族の射のOka性を示す。有限個の点の除去と同時爆発でもOka性が保たれ、一点爆発から標準とは異なる複素構造を持つOkaな射影3空間の微分同相型を得る。
abstract_en: ''
summary_en: This paper examines holomorphic flexibility in an admissible period family arising from a torus-fibred complex structure on the six-sphere. It proves both the Oka property for individual members and the Oka-map property over relatively compact parameter discs. Finite point deletions and simultaneous point blowups preserve the Oka property within this family. The construction relies on cyclic coverings and explicit algebraic charts, with the source complex-six-sphere construction taken from earlier work.
abstract_ja: Alpögeによる三つの特殊ファイバーを持つトーラス束状の複素六次元球面を出発点に、その許容周期族のOka幾何を研究する。各メンバーはOka多様体であり、相対コンパクトなパラメータ円板上の族の射もOka写像となる。任意の有限個の相異なる点を除いた空間と、それらの点で同時に爆発した空間にもOka性が成立する。一点爆発は標準の射影3空間と微分同相だが双正則でないOka多様体を与える。
abstract_source_url: https://arxiv.org/abs/2610.00250
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.00250v2](https://arxiv.org/abs/2610.00250)
- **著者:** Yun-Heng Du, Bin Guo, Yuta Kusakabe, Song-Yan Xie
- **初回投稿日:** 2026-09-23
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka性は、Stein空間からの連続写像を、近似や補間を保ちながら正則写像へ変形できるという柔軟性を表す。本論文はAlpögeの複素六次元球面の構成を引用して出発点とし、その周期を変える族がOka性を持つことを研究する。複素構造そのものの構成を本論文の新しい主結果と混同しないことが重要である。

主定理は個々の多様体だけでなく、パラメータ円板上の族全体の射がOka写像になることを述べる。各ファイバーのOka性から族の主張を自動的に導くのではなく、被覆族の積構造を利用して相対的な柔軟性を証明する。

さらに有限個の点の除去や同時爆発に対してOka性が保たれる。とくに一点で爆発すると、標準の $\mathbb P^3$ と微分同相でありながら複素構造の異なるOka多様体が得られる。一方、一般の曲線に沿う爆発についてIntroductionが述べるのはOka–1性であり、完全なOka性とは区別される。

## 背景と問題設定

対象は $S^6$ と微分同相な複素三次元多様体 $X\_a$ の族である。$a$ は許容半平面 $A\subset\mathbb C$ を動き、固定された充填データからトーラスファイブレーション $f\_a:X\_a\to\mathbb P^1$ を持つ族を作る。特殊ファイバーは

$$
f\_a^\ast (0)=3S\_{1,a},\qquad f\_a^\ast (1)=4S\_{2,a},\qquad f\_a^{-1}(\infty)=W\_a
$$

であり、二つの有限多重ファイバーの被約部分はbielliptic曲面、もう一つは非正規なcuspファイバーである。滑らかな部分の底 $\mathbb P^1\setminus\lbrace 0,1,\infty\rbrace $ は双曲的であるため、一般ファイバーとコンパクトな底のOka性だけでは全空間の柔軟性を説明できない。

## 主結果

### 絶対的・相対的なOka性（Theorem 1.1）

任意の相対コンパクトな円板 $\Delta\Subset A$ について、

$$
\pi\_\Delta:\mathfrak X\_\Delta\longrightarrow\Delta
$$

はOka写像である。また任意の $a\in A$ に対し、$X\_a$、$X\_a\setminus S\_{1,a}$、$X\_a\setminus S\_{2,a}$ はOka多様体となる。Oka写像という主張は、パラメータを持つ持ち上げ問題に対するOka原理とSerreファイブレーションの性質を含む相対的な主張である。

### 有限個の点の除去と同時爆発（Theorem 1.2）

任意の $a\in A$ と有限個の相異なる点の集合 $P\subset X\_a$ に対し、

$$
X\_a\setminus P\quad\text{および}\quad\operatorname{Bl}\_P X\_a
$$

はいずれもOkaである。これはこの族についての保存定理であり、任意のOka多様体の任意の爆発について同じ結論を主張するものではない。

### 射影3空間の非標準複素構造と曲線の爆発

一点 $p$ の場合、$\operatorname{Bl}\_pX\_a$ は $\mathbb P^3$ と微分同相であるが双正則ではない。Introductionは、接束の第1Chern類の可除性が前者では2、標準の $\mathbb P^3$ では4であることを判別の理由として挙げる。

また滑らかなコンパクト曲線 $C\subset X\_a$ の爆発は、引用されるForstnerič–Lárussonの定理によってOka–1性を持つ。これは開Riemann面からの写像に対するRunge近似とjet補間の性質であり、有限点のTheorem 1.2と同一の強さの結論ではない。

## 証明の見取り図

有限多重ファイバーの一つを除き、根を取る有限底変換と周期格子の巡回被覆を施す。被覆内に現れる二列のconic bandの代数的チャートに、$(\mathbb C^\ast )^3$ と同型な開集合を見いだす。解析的な拡張と正則被覆に関するOka性の不変性を順に使い、ファイバー補集合から全空間へ柔軟性を伝える。

族については、被覆を定める周期格子の核がパラメータに依存しないことから、円板上の被覆族が固定Oka多様体との積になる。有限点を除く場合は、被覆で持ち上げた点集合を主チャート上でtameにし、補集合のOka性を示す。爆発の場合には例外因子の補集合が点を除いた元の空間に一致することを使う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.00250)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.00250v2) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2、Introductionに述べられたCorollaries 4.6, 4.7への応用
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.00250v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
