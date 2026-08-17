---
layout: paper
title: "A no-go theorem for special Ulrich bundles, with a complement on primary Burniat surfaces"
title_ja: "特殊Ulrich束の非存在定理とprimary Burniat曲面での補完"
authors: "Cristian Anghel, Filip Chindea"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.AC
arxiv_abstract: >-
  Let $X$ be a smooth projective surface with $p_g=0$, and let $H$ be an ample divisor with
  $h^0(\mathcal{O}_X(H))\neq0$, $χ(\mathcal{O}_X(H))\ge q$, and $h^1(\mathcal{O}_X(H))\neq0$. We prove
  that no rank two bundle $\mathcal{E}$ with $c_1(\mathcal{E})=3H+K_X$, with the Ulrich value of
  $c_2(\mathcal{E})$, and satisfying $h^0(\mathcal{E}(-H))=0$, can arise from an extension $0 \to
  \mathcal{O}_X(H+K_X) \to \mathcal{E} \to \mathcal{O}_X(2H)\otimes\mathcal{I}_Z \to 0$. Thus, for
  this natural Cayley-Bacharach construction, non-speciality of the polarization is necessary rather
  than merely convenient. We then study primary Burniat surfaces. We show that every ample and base
  point free divisor is non-special; consequently, every polarization carries a stable special Ulrich
  bundle of rank two, and the surface is strictly Ulrich wild with respect to every polarization. We
  also locate the special ample classes on three numerical rays through $K_X$, compute explicit
  families on these rays, and analyze a twisted-kernel variant of the construction. The degree bound
  underlying the non-speciality result overlaps with recent work of Y. Cho, while the global
  consequences and the no-go theorem are independent.
topic: algebraic-geometry
tags:
  - positivity
  - vector-bundles-sheaves
arxiv_id: "2608.09901v1"
arxiv_url: "https://arxiv.org/abs/2608.09901"
arxiv_submitted: "2026-08-10"
arxiv_updated: "2026-08-10"
summary: >-
  幾何種数0の射影曲面上で、特殊な偏極から標準的なCayley–Bacharach拡大によって階数2の特殊Ulrich束を作ることへの非存在定理を証明する。一方、primary Burniat曲面では全ての偏極が非特殊であるため、安定な特殊Ulrich束が常に存在し、特殊なample類が現れる数値的な半直線も特定される。
abstract_en: ""
summary_en: >-
  The authors isolate a genuine obstruction in the standard Cayley–Bacharach construction of rank-two special Ulrich bundles on surfaces with vanishing geometric genus. A special ample divisor cannot support a bundle of the prescribed Chern classes and vanishing through the usual adjoint-kernel extension. On a primary Burniat surface, every ample globally generated divisor avoids this obstruction, so every polarization admits a stable special Ulrich bundle and yields strict Ulrich wildness. The paper also locates the numerical rays carrying special ample classes and studies why related twisted constructions still fail there.
abstract_ja: >-
  幾何種数 $p_g=0$ の滑らかな射影曲面で、ample因子 $H$ が有効かつ $\chi(\mathcal O_X(H))\ge q$ を満たす一方 $h^1(\mathcal O_X(H))\ne0$ なら、所定のChern類と $h^0(E(-H))=0$ を持つ階数2束は標準的なadjoint-kernel型拡大からは得られない。これはCayley–Bacharach構成において偏極の非特殊性が本質的であることを示す。primary Burniat曲面では全てのampleかつbase point freeな因子が非特殊であり、従って全ての偏極が安定な階数2特殊Ulrich束を持つ。さらに特殊ample類を $K_X$ を通る三本の数値的半直線上に限定し、その上の具体例とtwisted-kernel構成の障害を記述する。
abstract_source_url: "https://arxiv.org/abs/2608.09901"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.09901](https://arxiv.org/abs/2608.09901)
- **著者:** Cristian Anghel, Filip Chindea
- **初回投稿日:** 2026年8月10日
- **最終更新日:** 2026年8月10日
- **主分類・副分類:** math.AG（主分類）、math.AC（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ulrich束は、射影多様体上のベクトル束のうち適切なtwistの全コホモロジーが消えるものをいう。曲面上の階数2特殊Ulrich束にはChern類が強く指定され、Cayley–Bacharach条件を満たす零次元部分スキームから拡大を作る標準的な存在証明が知られている。

本論文の第一の主張は、この構成で通常仮定されてきた偏極の非特殊性 $h^1(\mathcal O_X(H))=0$ が、単なる技術的便宜ではないという非存在定理である。$H$ が特殊なら、標準的なadjoint-kernel型拡大の局所自由性が要求するCayley–Bacharach条件と、Ulrich条件が課す切断の消滅が両立しない。

この障害をprimary Burniat曲面上で詳しく調べると、全てのampleかつbase point freeな因子は実は非特殊である。従って全ての偏極について安定な階数2特殊Ulrich束が存在し、さらに任意の偶数階数で大きな族を持つというstrict Ulrich wildnessが得られる。

一方で特殊なample類そのものは存在するが、$K_X$ を頂点とする三本の数値的半直線に閉じ込められ、どれもbase point freeではない。論文はその半直線上でコホモロジーを具体的に計算し、自然なtwisted-kernel版もUlrich消滅条件を満たさない族を示す。

## 背景と問題設定

曲面 $X$ と非常にampleな因子 $H$ に対し、ベクトル束 $E$ がUlrichであるとは

$$
H^\bullet(X,E(-H))=H^\bullet(X,E(-2H))=0
$$

であることをいう。階数2でspecialとは $c_1(E)=3H+K_X$ を意味し、Riemann–Rochから第二Chern類も

$$
c_2(E)=\frac12(5H^2+3H\cdot K_X)+2\chi(\mathcal O_X)
$$

に固定される。$p_g=q=0$ かつ $h^1(\mathcal O_X(H))=0$ のとき、Casnatiの既知の存在定理は

$$
0\longrightarrow\mathcal O_X(H+K_X)\longrightarrow E
\longrightarrow\mathcal O_X(2H)\otimes\mathcal I_Z\longrightarrow0
$$

というadjoint-kernel型のCayley–Bacharach構成を与える。本論文は、$h^1(\mathcal O_X(H))\ne0$ の場合にもこの同じ構成が可能か、そしてBurniat曲面上で特殊性がどのように現れるかを問う。

## 主結果

### Adjoint-kernel構成の非存在（Theorem 1.3）

$X$ を $p_g=0$ の曲面、$q=h^1(\mathcal O_X)$ とし、$H$ はampleで

$$
h^0(\mathcal O_X(H))\ne0,\qquad
\chi(\mathcal O_X(H))\ge q,\qquad
h^1(\mathcal O_X(H))\ne0
$$

を満たすとする。このとき、上記のadjoint-kernel型拡大に入り、かつ

$$
c_1(E)=3H+K_X,\qquad
c_2(E)=\frac12(5H^2+3H\cdot K_X)+2\chi(\mathcal O_X),\qquad
h^0(E(-H))=0
$$

を満たす階数2ベクトル束 $E$ は存在しない。特に $H$ が非常にampleなら、この拡大から特殊Ulrich束を構成することはできない。結論は特殊Ulrich束一般の非存在ではなく、あくまでこの自然な拡大形に対する鋭い障害である。

### 高階数の単純Ulrich束（Theorem 1.4）

既知の存在定理の状況で $X$ が非負Kodaira次元の極小曲面であるとする。$H^2+4>K_X^2$ なら階数4のsimple Ulrich束が存在する。さらに

$$
H^2+4-K_X^2\ge3
$$

なら、全ての偶数階数 $r\ge2$ にsimple Ulrich束が存在し、その族の次元は $r$ とともにいくらでも大きくなる。この意味で $(X,H)$ はstrictly Ulrich wildである。

### Primary Burniat曲面での分類（Theorem 1.5）

primary Burniat曲面 $X$ では、全てのampleかつbase point freeな因子 $H$ が非特殊である。従って全ての偏極が $\mu_H$-安定な階数2特殊Ulrich束を持ち、追加の数値仮定なしに全ての偏極についてstrict Ulrich wildとなる。

反対に、$H$ がampleかつ $h^1(\mathcal O_X(H))\ne0$ なら、その数値類は必ず

$$
H\equiv K_X+c(h-f_i),
\qquad i\in\{1,2,3\},\quad c\ge0
$$

という三本の半直線のいずれかにある。これらの半直線には実際に特殊類があるが、いずれもbase point freeではない。Introductionでは、頂点の63個の非自明torsion twistのうち3個、および各半直線上の $c=2u$（$u\ge2$）に具体例があると述べられている。

## 証明の見取り図

Theorem 1.3では、拡大が局所自由になるため零次元スキーム $Z$ がCayley–Bacharach条件を満たさねばならない。一方、所定の $c_2(E)$ が $Z$ の長さを固定し、$h^0(E(-H))=0$ は $Z$ が $|H|$ に課す条件の独立性を要求する。Introductionによれば、特殊性があると前者は条件の従属性を、後者は不正則度を除けば独立性を強いるため、両者が衝突する。

Burniat曲面では、6本の楕円的分岐曲線に対しbase point free因子の交点数は1にならない。この次数境界とMori錐の記述から $H-K_X$ のample性を導き、Kodaira消滅で全偏極の非特殊性を得る。特殊ample類の分類はBurniat被覆の下のdel Pezzo曲面へ降ろした数値計算を使い、高階数の結果は階数2束の組をKronecker quiverの構成へ入力して得る、とIntroductionは説明している。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.09901](https://arxiv.org/abs/2608.09901)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3, 1.4, 1.5
- **論文構成の説明:** Introduction, pp. 5–6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
