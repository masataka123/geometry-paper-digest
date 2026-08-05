---
layout: paper
title: "射影多様体上の複素 Hessian 型方程式に対する数値的判定条件"
authors: "Gao Chen, Sijie Nie, Yulun Xu"
topic: complex-geometry
arxiv_id: "2608.03815"
arxiv_url: "https://arxiv.org/abs/2608.03815"
arxiv_submitted: "2026-08-04"
summary: "複素 Hessian 型方程式について、解または錐条件の存在を、部分多様体上の交点数の正値性で特徴づける Nakai–Moishezon 型判定法を与える。低次数の場合には、一様な数値的不等式と摂動した錐条件との同値性を証明する。"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "独自の日本語要約"
published: true
---

## 書誌情報

- **原題**：*A numerical criterion for complex Hessian type equations on projective manifolds*
- **著者**：Gao Chen, Sijie Nie, Yulun Xu
- **arXiv**：[arXiv:2608.03815v1](https://arxiv.org/abs/2608.03815)（[PDF](https://arxiv.org/pdf/2608.03815)）
- **初回投稿**：2026年8月4日（v1）
- **分類**：math.DG（Differential Geometry）
- **ライセンス**：[arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **記事形式**：このライセンスは翻案の許諾を明示するものではないため、Introduction の逐語訳ではなく独自の日本語要約とした。

## 一文要約

射影多様体上の複素 Hessian 型方程式に対し、付随多項式の right-Noetherian 性の下で、解析的な錐条件または解の存在と、該当する全ての部分多様体上の一様な交点数不等式とを結ぶ Nakai–Moishezon 型判定条件を確立した。

## 背景と問題設定

複素 Monge–Ampère 方程式は、Calabi 予想と Yau の解決を通じて Kähler 幾何の中心的道具となった。その後、J 方程式や複素 Hessian 方程式を含む完全非線形方程式について、\(C\)-subsolution を仮定した存在理論が発展した。一方、Demailly–Păun による Kähler 錐の数値的特徴づけや、J 方程式に対する Collins–Székelyhidi と Chen の結果は、PDE の可解性を部分多様体上の積分不等式で判定する方向を開いた。

本論文では、複素次元 \(n\) のコンパクト連結滑らかな射影多様体 \(M\)、Kähler 形式 \(\chi\)、類 \([\omega_0]\in H^{1,1}(M;\mathbb R)\) を固定する。\(d\leq n\) に対して

\[
 \omega^d\wedge\chi^{n-d}
 =\sum_{k=0}^{d-1}a_k\omega^k\wedge\chi^{n-k},
 \qquad \omega\in[\omega_0]                                      \tag{1}
\]

を考え、付随多項式を

\[
 f(x)=x^d-\sum_{k=0}^{d-1}a_kx^k
\]

とする。\(d=n\) の場合は Monge–Ampère 型方程式とも呼ばれる。次数 \(d\) のモニック多項式 \(h\) の各最大実根が存在するとき、Definition 2.7 の strongly strictly right-Noetherian 条件は

\[
 r(h)>r(h')>\cdots>r\!\left(h^{(d-1)}\right)
\]

である。論文は、多項式の polarization から定まる Fang–Ma–Gårding 錐を使い、方程式の点ごとの錐条件を、部分多様体上のコホモロジー的積分不等式へ置き換える。

## イントロダクションの独自日本語要約

Lin は \(d=n\) の場合に right-Noetherian 多項式と複素 Hessian 型方程式の安定条件との同値性を示し、Fang–Ma はその理論を \(d<n\) や多変数多項式へ拡張した。本論文は、まず次数 \(n\) の strongly strictly right-Noetherian 多項式について、滑らかな解、錐条件を満たす代表元、全ての真部分多様体上の厳密な数値的不等式が同値であることを示す。

さらに任意の次数 \(d\leq n\) の strictly right-Noetherian 多項式について、該当する全次元の既約解析的部分多様体に共通する \(\epsilon_0>0\) を持つ一様な数値条件と、十分小さい任意の \(\epsilon>0\) に対する \(f+\epsilon\) の錐内の代表元の存在とを同値にする。この一般定理から、複素 Hessian 商方程式に関する Székelyhidi 予想の一様版と、複素 \(k\)-Hessian 方程式に関する Murakami の定式化の一様版が射影多様体上で導かれる。

射影性を外すと、一般には経路に沿う追加条件が必要になる。本結果は、射影的という代数幾何的仮定の下で、部分多様体上の数値条件だけから錐条件へ到達する定理である。

## 主結果

以下では原論文の係数、量化、添字範囲を保つ。錐 \(\Upsilon_F\)、一次錐 \(\Upsilon_F^1\)、polarization \(F\) は原論文 §2 の定義による。

### 主定理1（Theorem 1.1）

\((M,\chi)\) を複素次元 \(n\) のコンパクト連結滑らかな射影多様体とする。\(k=1,2,\ldots,n-1\) に対して \(c_k\) を実定数、\(c_0\) を \(M\) 上の実数値関数とする。方程式

\[
 \omega^n=\sum_{k=0}^{n-1}c_k\binom nk
 \omega^k\wedge\chi^{n-k}                                      \tag{2}
\]

に付随する

\[
 f(x)=x^n-\sum_{k=0}^{n-1}c_k\binom nkx^k
\]

が全ての点で strongly strictly right-Noetherian であり、

\[
 \int_M\omega_0^n
 =\int_M\sum_{k=0}^{n-1}c_k\binom nk
 \omega_0^k\wedge\chi^{n-k}
\]

を満たすとする。このとき次は同値である。

1. 式 (2) は、錐条件を満たす \([\omega_0]\) 内の一意な滑らかな解 \(\omega\) を持つ。
2. \([\omega_0]\) 内に錐条件を満たす \(\omega\) が存在する。
3. 任意の \(p<n\) 次元部分多様体 \(V\subset M\) に対して

   \[
   \int_V\frac{n!}{p!}\omega_0^p
   -\sum_{k=n-p}^{n-1}
   c_k\binom nk\frac{k!}{(k-n+p)!}
   \omega_0^{k-n+p}\wedge\chi^{n-k}>0
   \]

   が成立する。

### 主定理2（Theorem 1.2）

\((M,\chi)\) を複素次元 \(n\) のコンパクト連結滑らかな射影多様体とする。\(k=1,2,\ldots,d-1\) に対して \(a_k\) を実定数とする。

\[
 f(x)=x^d-\sum_{k=0}^{d-1}a_kx^k
\]

が strictly right-Noetherian で、

\[
 \int_M\omega_0^d\wedge\chi^{n-d}
 =\int_M\sum_{k=0}^{d-1}a_k\omega_0^k\wedge\chi^{n-k}
\]

を満たすとする。このとき次は同値である。

1. ある \(\epsilon_0>0\) が存在し、任意の \(p\) 次元既約解析的部分多様体 \(V\subset M\) と全ての \(n-d\leq p<n\) に対して

   \[
   \int_V
   \frac{d!\,\omega_0^{d-n+p}\wedge\chi^{n-d}}{(d-n+p)!}
   -\sum_{k=n-p}^{d-1}
   \frac{k!a_k\,\omega_0^{k-n+p}\wedge\chi^{n-k}}{(k-n+p)!}
   \geq\epsilon_0\int_V\chi^p                                  \tag{3}
   \]

   が成立する。
2. 任意の十分小さい \(\epsilon>0\) に対して

   \[
   \omega_\epsilon\in[\omega_0]\cap\Upsilon_{F_\epsilon}
   \]

   が存在する。ただし \(F_\epsilon\) は \(f(x)+\epsilon\) の polarization である。

ここでは、単一の \(\epsilon_0\) が全ての \(V\) に共通すること、次元範囲が \(n-d\leq p<n\) であること、条件2が「任意の十分小さい」正の \(\epsilon\) を量化することが重要である。

### Hessian 商方程式への帰結（Corollary 1.3）

\[
 \omega_\varphi^k\wedge\chi^{n-k}
 =C_{[\omega][\chi],k,l}\omega_\varphi^l\wedge\chi^{n-l},
 \qquad \lambda[\chi^{-1}\omega_\varphi]\in\Gamma_k              \tag{4}
\]

を考える。\(C_{[\omega][\chi],k,l}\) は

\[
 \int_M\omega^k\wedge\chi^{n-k}
 -C_{[\omega][\chi],k,l}\int_M\omega^l\wedge\chi^{n-l}=0
\]

で決まる。\(M\) が上記の射影多様体、\(\omega\) が閉 \((1,1)\)-形式、\(0<l<k\leq n\) のとき、式 (4) の滑らかな解の存在は、ある \(\epsilon_0>0\) による次の二群の不等式と同値である：

\[
 \int_V\frac{k!\omega^{k-n+p}\wedge\chi^{n-k}}{(k-n+p)!}
 -C_{[\omega][\chi],k,l}
 \frac{l!\omega^{l-n+p}\wedge\chi^{n-l}}{(l-n+p)!}
 \geq\epsilon_0\int_V\chi^p
\]

が全ての \(n-l\leq p<n\) で成立し、

\[
 \int_V\omega^{k-n+p}\wedge\chi^{n-k}
 \geq\epsilon_0\int_V\chi^p
\]

が全ての \(n-k\leq p<n-l\) で成立する。どちらも任意の \(p\) 次元既約解析的部分多様体 \(V\subset M\) に対する条件である。

## 証明の見取り図

1. **多項式と錐（§2）**：一変数多項式を \(n\) 変数へ polarization し、Fang–Ma–Gårding 錐を導入する。Lemma 2.21 は、錐内の形式から、形式的微分で得られる \((p,p)\)-形式 \(H_G^{(n-p)}(\omega)\) の厳密な強正値性を導く。
2. **錐包含（§3、pp. 13–14）**：Lemma 3.1 は \(g_T(x)=(x+T)f(x)\) に対して \(\Upsilon_{G_T}\subseteq\Upsilon_F\) を示す。Lemma 3.2 は、任意の \(\varepsilon>0\) に対する \(f-\varepsilon f'\) が strongly strictly right-Noetherian になることを示す。
3. **Theorem 1.2 の帰着（§5、pp. 15–18）**：\(f+\epsilon\) に \((x+T)^{n-d}\) を掛け、Proposition 5.1 で全ての正次元の既約解析的部分多様体上の正値性を得る。さらに \(-\delta g'\) で強い根の条件を作り、可積分条件を正規化して Theorem 1.1 を適用する。逆向きは、錐内の代表元から

   \[
   H_F^{(n-p)}(\widehat\omega)\geq\epsilon_1\chi^p
   \]

   を得て各 \(V\) 上で積分する。
4. **Theorem 1.1 の解析（§§6–9、pp. 18–32）**：既知の結果で条件1と2は同値であり、Lemma 2.21 から条件1なら条件3であるため、中心は条件3から2である。\(c_{n-1}=0\)、\(c_0\) が定数の場合へ還元し、次元帰納法と連続法を設定する。§7 の mass concentration、§8 の Datar–Pingali の貼り合わせ、§9 の滑らかおよび特異部分多様体に対する局所拡張定理により閉性を証明する。

## 独立照合メモ

初稿とは別工程で TeX ソースと PDF を照合し、次を確認した。

- Theorem 1.1 では \(c_1,\ldots,c_{n-1}\) が実定数、\(c_0\) が \(M\) 上の実数値関数である。
- Theorem 1.1 の条件3は全ての \(p<n\) 次元部分多様体に対する厳密不等式 \(>0\) で、和は \(k=n-p,\ldots,n-1\) である。
- Theorem 1.2 では単一の \(\epsilon_0>0\) が全ての該当する既約解析的部分多様体に共通し、不等号は \(\geq\)、次元範囲は \(n-d\leq p<n\) である。
- Theorem 1.2 の条件2は任意の十分小さい \(\epsilon>0\) に対する主張で、摂動は \(f+\epsilon\) である。
- Corollary 1.3 では \(0<l<k\leq n\) で、条件は \(n-l\leq p<n\) と \(n-k\leq p<n-l\) の二範囲に分かれる。
- 一般の \(d<n\) について錐条件と解の存在との同値性までは証明していない。その同値性は、複素 Hessian 方程式と Hessian 商方程式を除いて未解決であると Introduction に明記されている。

## 研究上の位置づけ

本研究は、完全非線形複素幾何 PDE の可解性を部分多様体上の交点数へ翻訳する流れに属する。Theorem 1.2 は、次数 \(d\) が多様体次元 \(n\) より小さい場合も扱い、全ての部分多様体に共通する \(\epsilon_0\) を持つ一様条件を提示する。Corollary 1.3 では、数値条件から解を得る向きで、Székelyhidi の元の予想に現れる \([\omega]\) 内の \(\Gamma_k\) 代表元の先験的存在を仮定しない。一方、結果は射影性を仮定し、非射影 Kähler 多様体へそのまま拡張されるものではない。

## 原論文との対応

- Abstract：p. 1
- Introduction：§1、pp. 1–6
- 基本方程式：§1、式 (1)、p. 2
- strongly strictly right-Noetherian：Definition 2.7、pp. 7–8
- 主定理1：Theorem 1.1、式 (2)、pp. 2–3
- 主定理2：Theorem 1.2、式 (3)、p. 3
- Hessian 商方程式：Corollary 1.3、式 (4)、pp. 3–4
- 複素 \(k\)-Hessian 方程式：Corollary 1.5、式 (5)、pp. 4–5
- 準備：§2、pp. 6–12
- 錐包含：Lemmas 3.1–3.2、§3、pp. 13–14
- 一様版予想の証明：§4、p. 15
- 主定理2の証明：§5、pp. 15–18
- 連続法：§6、pp. 18–21
- Mass concentration：§7、pp. 21–24
- 貼り合わせ：§8、pp. 24–25
- 局所拡張：§9、pp. 25–32

## 原論文・ライセンス

- [arXiv Abstract](https://arxiv.org/abs/2608.03815)
- [PDF](https://arxiv.org/pdf/2608.03815)
- [TeX source](https://export.arxiv.org/e-print/2608.03815)
- [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
