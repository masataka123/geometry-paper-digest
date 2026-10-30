---
layout: paper
title: Normal stable degenerations of Noether-Horikawa surfaces
title_ja: 正規安定Horikawa曲面の分類・平滑化とKSBA境界
authors: Hiroto Akaike, Makoto Enokizono, Masafumi Hattori, Yuki Koto
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.GT
arxiv_abstract: We classify all normal stable Horikawa surfaces with only $\mathbb{Q}$-Gorenstein smoothable log canonical singularities. Furthermore, we provide a criterion for their global $\mathbb{Q}$-Gorenstein smoothability and describe the boundary strata of the moduli space of $\mathbb{Q}$-Gorenstein smoothable normal stable Horikawa surfaces.
topic: algebraic-geometry
tags:
- moduli
- singularities
- birational-geometry
arxiv_id: 2507.17633v1
arxiv_url: https://arxiv.org/abs/2507.17633
arxiv_submitted: '2025-07-23'
arxiv_updated: '2025-07-23'
summary: Noether等式を満たすHorikawa曲面の正規安定退化を、局所的にQ-Gorenstein平滑化可能な特異点を持つ範囲で分類する。曲面全体の平滑化をgood involutionに関する局所同変平滑化へ還元し、KSBA境界の層構造と連結性を明らかにする。幾何種数10の一部の層にはなお未解決点が残る。
abstract_en: ''
summary_en: The paper investigates normal boundary points of the moduli of Horikawa surfaces. It separates restrictions on individual singularities from the existence of a global Q-Gorenstein smoothing. A distinguished involution and birational models of its quotient make the smoothing problem tractable. The results also determine connectedness of the normal smoothable locus, while retaining an exception in the detailed stratification at geometric genus ten.
abstract_ja: 本論文は、Q-Gorenstein平滑化可能なlog canonical特異点のみを持つ正規安定Horikawa曲面を分類する。さらに、局所的に平滑化可能な特異点を持つことと曲面全体がQ-Gorenstein平滑化可能であることを区別し、後者の判定条件を与える。平滑化可能な正規安定Horikawa曲面のモジュライ境界を記述し、good involutionとその商の対の変形を主要な道具とする。
abstract_source_url: https://arxiv.org/abs/2507.17633
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2507.17633v1](https://arxiv.org/abs/2507.17633)
- **著者:** Hiroto Akaike, Makoto Enokizono, Masafumi Hattori, Yuki Koto
- **初回投稿日:** 2025-07-23
- **最終更新日:** 2025-07-23
- **主分類・副分類:** math.AG（主分類）; math.DG, math.GT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Horikawa曲面は、一般型曲面のNoether不等式で等号を達成する曲面である。滑らかな曲面やDu Val特異点を持つ標準モデルの分類は古典的だが、そのモジュライをKSBA理論でコンパクト化したときに現れるlog canonical特異点を持つ退化は、はるかに複雑になる。

本論文は、各特異点が局所的にQ-Gorenstein平滑化可能である正規安定Horikawa曲面を調べる。この局所条件だけでは曲面全体の平滑化は保証されない。著者らはgood involutionと呼ぶ特別な対合を使い、大域平滑化の問題を、その対合に関する楕円的double cone特異点の局所同変平滑化へ還元する。

さらに、平滑化可能な正規曲面がなすモジュライの境界の層構造と連結性を記述する。幾何種数10では、supersingularな標準型曲面が二つの滑らかな成分を結ぶ一方、すべてのsupersingular曲面の細かな変形挙動は未解決として残る。また、局所条件のみを課した広い分類表では、すべての候補の実現を確認したわけではないことも明記される。

## 背景と問題設定

Horikawa曲面を定める中心の数値関係は

$$
K\_X^2=2p\_g(X)-4
$$

である。滑らかな極小一般型曲面についてはNoether不等式 $K\_X^2\geq2p\_g(X)-4$ が成り立つ。安定曲面では標準類の豊富性とsemi-log canonical特異点がKSBAモジュライの基本条件となり、本論文はそのうち正規なものに焦点を当てる。

標準写像が二重被覆になるものをstandard、標準線形系がpencilと合成されるものをnon-standardと呼ぶ。standardの場合の像は最小次数曲面であり、射影平面、Hirzebruch曲面、有理正規曲線上の錐が現れる。good involutionは論文固有の条件を満たす対合で、存在すれば一意である。大域的に平滑化可能な曲面には必ず存在するが、その存在だけで平滑化可能性が決まるわけではない。

## 主結果

### 主定理1：平滑化可能な曲面の七つの型（Theorem 1.3）

Q-Gorenstein平滑化可能な正規安定Horikawa曲面は、次の七つのいずれかに属する。以下で記載していない非Gorenstein特異点は存在しないという条件も含む。

1. Gorensteinで、標準写像が最小次数曲面への二重被覆となるstandard型。
2. $p\_g=4$、Gorensteinで標準系がpencilと合成され、二重標準写像が次数8の楕円錐 $W\subset\mathbb P^8$ への二重被覆となる型。
3. $\frac{1}{(p\_g-1)^2}(1,p\_g-2)$ 型のT特異点を二つ持つLee–Park型。
4. $p\_g=3$ で $\frac1{50}(1,29)$ 型のT特異点を一つ持つ型。
5. $p\_g=3$ で $(2,2,2,2)$ 型のstrictly lc特異点を一つ持つ型。
6. $p\_g=3$ で $\frac1{50}(1,29)$ 型を一つ、$\frac14(1,1)$ 型を二つ持つ型。
7. $p\_g=3$ で $\frac1{50}(1,29)$ 型と $(2,2,2,2)$ 型を一つずつ持つ型。

ここでstrictly lc特異点の表記は原論文の分類記号による。このリストは局所的に平滑化可能な特異点とgood involutionを持つ曲面の分類にも対応するが、リストに入ることだけでは大域平滑化の十分条件ではない。

### 主定理2：局所同変平滑化による大域判定（Theorem 1.4）

局所的にQ-Gorenstein平滑化可能な特異点のみを持ち、good involutionを持つ正規安定Horikawa曲面 $X$ が、曲面全体としてQ-Gorenstein平滑化可能であるための必要十分条件は、すべての楕円的double cone特異点がgood involutionに関して同変に平滑化可能なことである。

double cone特異点は、対合による商の錐特異点上に位置する特異点である。そのうち楕円的なものがなければ、上記仮定の下で大域平滑化が可能である。問題を任意の局所平滑化へ還元するのではなく、対合との両立を要求する点が本質である。

### 七つの型への適用（Theorem 1.5）

同じ仮定の下で、上の型2および型4–7は平滑化可能である。型1と型3ではmildな特異点のほかに高々一つのdouble cone特異点を持ち、楕円的double cone特異点が存在する場合に、その局所同変平滑化可能性がちょうど残る条件となる。

型2には次数4の単純楕円特異点が現れる。型3はLee–Parkの例を拡張するものである。なおTheorem 1.7は、Gorensteinな正規安定Horikawa曲面がgood involutionを持つことを示す。局所特異点の条件と対合の存在を切り分けて確認するための補足結果である。

### 境界の層構造と例外（Theorem 1.14）

幾何種数 $p\_g\geq3$ の平滑化可能な正規安定Horikawa曲面の粗モジュライを $\overline{\mathcal M}^{\mathrm{Gie}}\_{2p\_g-4,p\_g}$ とする。$p\_g\ne10$ の場合、その半正規化の境界の層構造は原論文のFigures 10–15で記述される。

$p\_g=10$ ではsupersingularなstandard型を除く部分の完全な記述を与えるが、その部分を含めた細部には未解決点がある。特に、すべてのsupersingular曲面が型(0)へ平滑化するかは未解決である。一部の具体例が型(0)と型(6)の双方へ平滑化することと、すべての例で同じことができることを混同してはいけない。

### 商の対との比較（Theorem 1.16）

good involutionの商と分岐因子からなる対のモジュライの半正規化を $(\mathcal M^{\mathrm{nq}}\_{p\_g})^{\mathrm{sn}}$ と書くと、有限射

$$
\alpha':(\overline{\mathcal M}^{\mathrm{Gie}}\_{2p\_g-4,p\_g})^{\mathrm{sn}}
\longrightarrow (\mathcal M^{\mathrm{nq}}\_{p\_g})^{\mathrm{sn}}
$$

があり、Theorem 1.3の型2を除く開部分上では同型となる。曲面そのものの変形を商の対の変形で調べるという方法を、モジュライの比較として表した結果である。

### 正規な平滑化可能部分の連結性（Theorem 1.17）

連結性は明示的な条件で決まり、

$$
\overline{\mathcal M}^{\mathrm{Gie}}\_{2p\_g-4,p\_g}\text{ が連結}
\quad\Longleftrightarrow\quad
p\_g=6,10\ \text{または}\ p\_g-2\notin4\mathbb Z
$$

となる。特に $p\_g=10$ ではlc退化を許すことで二つの滑らかな成分が結ばれる。この結論は正規な平滑化可能部分についてのものであり、非正規曲面も許す完全なKSBA空間の連結性とは対象が異なる。また、滑らかな曲面の微分同相型に関するHorikawa問題をこれだけで解いたとは主張していない。

## 証明の見取り図

分類ではlog Noether不等式と、T特異点の例外曲線を拡張したextended T-chainの組合せ論を使う。non-standard型の最小モデルは有理曲線または楕円曲線上の楕円曲面となり、特異ファイバーと切断、対合の作用を分析して候補を絞る。局所的に平滑化可能な特異点のみを要求する広い分類では、Remark 1.2が、一部を除き各候補の実現を確認していないことを明記している。

平滑化については、対合の商 $W=X/\sigma$ と分岐因子 $B$ からなる対 $(W,\tfrac12B)$ に移る。通常のP-resolutionでは分岐因子を変形するためのコホモロジー消滅が失敗し得るため、著者らはanti-P-resolution $\mu:W^-\to W$ を導入する。これは $-K\_{W^-}$ が相対的に豊富となる向きの双有理モデルであり、対として

$$
K\_{W^-}+\tfrac12 B^- =\mu^\ast (K\_W+\tfrac12 B)
$$

を満たすものを用いる。分岐因子を伸ばす際の鍵は $H^1(\mathcal O\_{W^-}(B^-))$ の消滅である。

局所同変平滑化から適切なanti-P-resolutionを取り、大域の変形障害を除いた後、Fujinoのslc消滅定理やEnokizonoのより弱い正値性条件による消滅定理を適用する。商の対を変形して二重被覆を戻すことで曲面の平滑化を得る。こうしたモデルは非正規となる場合もあり、その点がslcの消滅定理を必要とする。境界の層構造も同じ商の対の変形を詳しく追って調べる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2507.17633)
- **Introduction:** [PDF](https://arxiv.org/pdf/2507.17633v1) — Section 1, pp. 2–28（Abstractはp. 1）。主結果はpp. 4–14、証明方針はSections 1.3–1.4、限界と展望はSection 1.5
- **Introduction中で言及された主要結果:** Theorems 1.3–1.5, 1.7, 1.14, 1.16, 1.17; Remark 1.2; Sections 1.3–1.4の分類・anti-P-resolutionの説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2507.17633v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
